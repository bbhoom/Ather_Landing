import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Define contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in a real app, this would send an email or store in DB)
      console.log('Contact form submission:', validatedData);
      
      // In a production environment, you would:
      // 1. Store the contact request in a database
      // 2. Send notification email to admin
      // 3. Send confirmation email to the user
      
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
  });

  const httpServer = createServer(app);
  return httpServer;
}
