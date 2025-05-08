import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { google } from 'googleapis';
// import nodemailer from 'nodemailer';

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
        // await Promise.all([
        //     saveToSpreadsheet(validatedData),
        //     sendEmailNotification(validatedData)
        // ]);

        // For now, only save to spreadsheet
        await saveToSpreadsheet(validatedData);

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
async function saveToSpreadsheet(data: ContactFormData): Promise<void> {
    try {
        // Configure Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.CONTACT_SPREADSHEET_ID;

        if (!spreadsheetId) {
            throw new Error('CONTACT_SPREADSHEET_ID environment variable is not set');
        }

        // Format the data for the spreadsheet
        // Format as [timestamp, name, email, phone, message]
        const values = [
            [
                new Date().toISOString(),
                data.name,
                data.email,
                data.phone,
                data.message || ''
            ]
        ];

        // Append data to the spreadsheet
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Leads_aether!A:E', // Adjust the sheet name and range as needed
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values
            }
        });

        console.log('Form data saved to spreadsheet successfully');

    } catch (error) {
        console.error('Error saving to spreadsheet:', error);
        // Don't throw - we want to continue with other operations even if this fails
    }
}

/**
 * Send email notification about the form submission
 * Currently commented out until email account is set up
 */
/*
async function sendEmailNotification(data: ContactFormData): Promise<void> {
    try {
        // Create a transporter using SMTP configuration
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email to notify admin about new contact submission
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.ADMIN_EMAIL, // Admin email to receive notifications
            subject: 'New Contact Form Submission',
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message || 'No message provided'}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
        });

        // Optional: Send confirmation email to the user
        if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
            await transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: data.email,
                subject: 'Thank You for Contacting Us',
                html: `
          <h2>Thank You for Contacting Us</h2>
          <p>Dear ${data.name},</p>
          <p>We have received your contact request and will get back to you shortly.</p>
          <p>Best regards,</p>
          <p>The Team</p>
        `,
            });
        }

        console.log('Email notifications sent successfully');

    } catch (error) {
        console.error('Error sending email notification:', error);
        // Don't throw - we want to continue with other operations even if this fails
    }
}
*/