// pages/api/sendToSheet.ts
import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST allowed' });
    }

    const auth = new google.auth.JWT(
        process.env.GOOGLE_CLIENT_EMAIL,
        undefined,
        (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });
    const { name, email, message } = req.body;

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[name, email, message, new Date().toLocaleString()]],
            },
        });

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}
