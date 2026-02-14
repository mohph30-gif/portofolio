import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, Linkedin, ArrowUp, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'pending' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(SOCIAL_LINKS.email)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
            _url: window.location.href,
            _subject: 'New message from portfolio website',
            _template: 'table',
          }),
        }
      );

      const result = await response.json().catch(() => null);
      const apiMessage = typeof result?.message === 'string' ? result.message : '';
      const hasApiSuccess = typeof result?.success === 'boolean' ? result.success : response.ok;
      const requiresActivation = /activate|confirm/i.test(apiMessage);

      if (!response.ok || !hasApiSuccess) {
        throw new Error('Failed to send');
      }

      setFormData({ name: '', email: '', message: '' });
      if (requiresActivation) {
        setSubmitState('pending');
        setSubmitMessage(apiMessage || 'Form is not activated yet. Please activate FormSubmit from your inbox first.');
      } else {
        setSubmitState('success');
        setSubmitMessage('Message sent successfully.');
      }
    } catch {
      setSubmitState('error');
      setSubmitMessage('Could not send the message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="bg-white relative">
      <Section id="contact" title="Contact" subtitle="Get In Touch" className="border-none">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-xl font-medium">
              Have a project in mind or want to hire me? Let's discuss how we can build something amazing together.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 p-4 border-2 border-black bg-blue-100 hover:bg-blue-200 transition-colors brutal-shadow-sm group">
                <div className="bg-black text-white p-2 group-hover:rotate-12 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-500">Email Me</div>
                  <div className="font-bold text-lg break-all">{SOCIAL_LINKS.email}</div>
                </div>
              </a>

              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black bg-green-100 hover:bg-green-200 transition-colors brutal-shadow-sm group">
                <div className="bg-black text-white p-2 group-hover:rotate-12 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-500">WhatsApp / Call</div>
                  <div className="font-bold text-lg">{SOCIAL_LINKS.phone}</div>
                </div>
              </a>

               <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black bg-blue-100 hover:bg-blue-200 transition-colors brutal-shadow-sm group">
                <div className="bg-black text-white p-2 group-hover:rotate-12 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-500">Connect</div>
                  <div className="font-bold text-lg">LinkedIn Profile</div>
                </div>
              </a>
              
               <a href="/assets/CV-English.pdf" download="CV-English.pdf" className="flex items-center gap-4 p-4 border-2 border-black bg-yellow-100 hover:bg-yellow-200 transition-colors brutal-shadow-sm group cursor-pointer">
                <div className="bg-black text-white p-2 group-hover:rotate-12 transition-transform">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-500">Resume</div>
                  <div className="font-bold text-lg">Download CV</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6 bg-yellow-50 p-8 border-4 border-black brutal-shadow" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-black uppercase mb-4">Send a Message</h3>
            
            <div className="space-y-2">
              <label className="font-bold" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-bold" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-bold" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>

            {submitState === 'success' && (
              <p className="font-bold text-green-700">
                {submitMessage}
              </p>
            )}

            {submitState === 'pending' && (
              <p className="font-bold text-amber-700">
                {submitMessage}
              </p>
            )}

            {submitState === 'error' && (
              <p className="font-bold text-red-700">
                {submitMessage}
              </p>
            )}

            <p className="text-sm font-semibold text-gray-700">
              If you still do not receive emails, check Spam/Promotions for a FormSubmit activation email and activate it once.
            </p>
          </form>

        </div>
      </Section>

      {/* Footer Bottom */}
      <div className="bg-black text-white py-8 px-4 border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="font-bold text-lg">Tighezza M. Salah</div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-bold text-yellow-400 hover:text-white transition-colors"
          >
            Back to Top
            <div className="p-2 border-2 border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
