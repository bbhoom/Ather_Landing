import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Initialize EmailJS on component mount (optional, can also be done in _app.js)
  // useEffect(() => {
  //   emailjs.init("YOUR_PUBLIC_KEY");
  // }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', isError: false });

    try {
      // Simple validation
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error('Please fill in all required fields');
      }

      // EmailJS configuration
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_q9wfpxe'; // e.g. 'service_abc123'
      const templateId = 'template_pnvab21'; // e.g. 'template_xyz789'
      const publicKey = '0qcATLfMYUXZ0WY1k'; // e.g. 'aBcDeFgHiJkLmNoPqRs'

      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        message: formData.message || 'No message provided',
        // You can add additional fields if needed
        subject: `New contact request from ${formData.name}`
      };

      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        // Success handling
        setFormStatus({
          message: 'Your message has been sent. We\'ll get back to you soon.',
          isError: false
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setFormStatus({
        message: error.message || 'Something went wrong. Please try again later.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary/20 p-8 rounded-md gold-border-gradient">
      <h3 className="text-2xl font-playfair font-semibold text-primary mb-6 text-center">Schedule a Visit</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-muted-foreground mb-1">Your Name *</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-background border-primary/30 rounded-sm focus:border-primary focus:ring-primary/20"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-muted-foreground mb-1">Email Address *</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-background border-primary/30 rounded-sm focus:border-primary focus:ring-primary/20"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-muted-foreground mb-1">Phone Number *</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="bg-background border-primary/30 rounded-sm focus:border-primary focus:ring-primary/20"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-muted-foreground mb-1">Message (Optional)</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements"
            className="bg-background border-primary/30 rounded-sm focus:border-primary focus:ring-primary/20 min-h-[100px]"
          />
        </div>

        {formStatus.message && (
          <div className={`p-3 rounded ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {formStatus.message}
          </div>
        )}

        <Button
          type="submit"
          className="w-full py-4 bg-primary hover:bg-primary/95 text-background font-medium rounded-sm transition-all duration-500 ease-in-out hover:shadow-md uppercase tracking-wider text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Schedule a Visit'}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground/70 text-center mt-4">
        By submitting this form, you agree to our <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a>.
      </p>
    </div>
  );
}