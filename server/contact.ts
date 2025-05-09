import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { google } from 'googleapis';

// Define contact form schema (matching the frontend validation)
const contactFormSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    try {
        // Validate the request body against the schema
        const validatedData = contactFormSchema.parse(req.body);

        // Process the validated form data
        const spreadsheetResult = await saveToSpreadsheet(validatedData);

        // Check if spreadsheet save was successful
        if (!spreadsheetResult.success) {
            throw new Error(spreadsheetResult.error || 'Failed to save to spreadsheet');
        }

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);

        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors
            });
        }

        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request'
        });
    }
}

/**
 * Save the form data to a Google Spreadsheet
 */
async function saveToSpreadsheet(data: ContactFormData): Promise<{ success: boolean, error?: string }> {
    try {
        // Log that we're attempting to save to spreadsheet
        console.log('Attempting to save form data to spreadsheet...');

        // Check if environment variable is set
        const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
        if (!serviceAccountKey) {
            console.error('GOOGLE_SERVICE_ACCOUNT_KEY is not set or empty');
            return { success: false, error: 'Missing service account credentials' };
        }

        // Parse service account key
        let credentials;
        try {
            credentials = JSON.parse(serviceAccountKey);
        } catch (e) {
            console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:', e);
            return { success: false, error: 'Invalid service account credentials format' };
        }

        // Configure Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.CONTACT_SPREADSHEET_ID;

        if (!spreadsheetId) {
            console.error('CONTACT_SPREADSHEET_ID environment variable is not set');
            return { success: false, error: 'Missing spreadsheet ID' };
        }

        // Format the data for the spreadsheet
        const values = [
            [
                new Date().toISOString(),
                data.name,
                data.email,
                data.phone,
                data.message || ''
            ]
        ];

        // Log the values being sent
        console.log('Sending to spreadsheet:', { spreadsheetId, values });

        // Append data to the spreadsheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Leads_aether!A:E', // Make sure this sheet exists in your spreadsheet
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values
            }
        });

        console.log('Spreadsheet API response:', response.status, response.statusText);

        if (response.status !== 200) {
            return {
                success: false,
                error: `Spreadsheet API returned status ${response.status}: ${response.statusText}`
            };
        }

        console.log('Form data saved to spreadsheet successfully');
        return { success: true };

    } catch (error: any) {
        console.error('Error saving to spreadsheet:', error);
        return {
            success: false,
            error: error.message || 'Unknown error when saving to spreadsheet'
        };
    }
}