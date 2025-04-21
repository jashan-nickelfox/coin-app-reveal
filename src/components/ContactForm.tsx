
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want This Type of Service for Your Project?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're ready to help you build the perfect solution for your specific needs. Contact us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="min-h-[150px] bg-white"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-coin-navy text-white p-8 rounded-xl h-full">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3" />
                    <div>
                      <p className="font-medium mb-1">Email Us</p>
                      <a href="mailto:contact@coinapp.com" className="text-gray-200 hover:text-white transition-colors">
                        contact@coinapp.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-3" />
                    <div>
                      <p className="font-medium mb-1">Call Us</p>
                      <a href="tel:+1234567890" className="text-gray-200 hover:text-white transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-white/20">
                    <p className="font-medium mb-3">Working Hours</p>
                    <p className="text-gray-200">Monday - Friday: 9AM - 5PM</p>
                    <p className="text-gray-200">Weekend: By appointment</p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <p className="font-medium mb-3">Follow Us</p>
                  <div className="flex space-x-4">
                    {/* Social icons - simplified version */}
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                      <a 
                        key={platform} 
                        href={`https://${platform}.com`} 
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">{platform}</span>
                        <div className="h-5 w-5 bg-white/70 rounded-sm"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
