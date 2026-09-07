import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Send, CheckCircle2, Clock, MapPin, Sparkles, Copy, Check, Loader2, AlertCircle } from 'lucide-react';
import { STORE_DETAILS, SAREE_COLLECTION } from '../data/storeData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  preselectedSareeName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedSareeName }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    sareeInterest: preselectedSareeName || 'Handloom Cotton & Linen',
    visitDate: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate realistic responsive submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //   }, 600);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${STORE_DETAILS.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            Name: formData.fullName,
            Phone: formData.phone,
            Email: formData.email || 'Not provided',
            'Saree Interest': formData.sareeInterest,
            'Preferred Visit Date': formData.visitDate || 'Flexible / Not scheduled',
            Message: formData.message || 'No specific note provided',
            _subject: `New Saree Inquiry: ${formData.fullName} (${formData.sareeInterest}) - Bharni Boutique`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const result = await response.json();
        if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
          setIsSubmitted(true);
        } else {
          throw new Error(result.message || 'Unable to submit inquiry at this moment.');
        }
      } catch (err: any) {
        console.error('Form submission error:', err);
        setSubmitError(
          `Unable to forward automatically. You can contact us directly at ${STORE_DETAILS.email} or click the WhatsApp button below.`
        );
      } finally {
        setIsSubmitting(false);
      }
    };

  const whatsappDirectUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Bharni Sarees, my name is ${formData.fullName || 'a customer'}. I would like to inquire about ${formData.sareeInterest}. ${formData.message ? `Message: ${formData.message}` : ''}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#2D241E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.4em] font-sans block text-[#2D241E]/60">
            Direct Concierge
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#2D241E]">
            Connect With Our Saree Concierge
          </h2>
          <p className="text-sm sm:text-base text-[#2D241E]/70 font-normal leading-relaxed font-sans">
            Have questions about a specific weave, custom bridal trousseau, or planning an in-store viewing? We are delighted to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <div className="p-6 bg-[#EADCCB]/20 rounded-2xl border border-[#2D241E]/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2D241E]">
                  <div className="p-2 rounded-lg bg-[#FDFBF7] text-[#2D241E] border border-[#2D241E]/10">
                    <Phone className="w-4 h-4 opacity-70" />
                  </div>
                  <span>Call Atelier Directly</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#2D241E]/70 bg-[#FDFBF7] px-2.5 py-1 rounded-md border border-[#2D241E]/10">
                  Direct Line
                </span>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D241E]/50 block">Primary Mobile & WhatsApp:</span>
                    <a
                      href={`tel:${STORE_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                      className="font-medium text-[#2D241E] hover:opacity-70 text-sm"
                    >
                      {STORE_DETAILS.phonePrimary}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(STORE_DETAILS.phonePrimary, 'phonePrimary')}
                    className="p-1.5 text-[#2D241E]/50 hover:text-[#2D241E] hover:bg-[#FDFBF7] rounded-md transition-colors"
                    title="Copy phone number"
                  >
                    {copiedType === 'phonePrimary' ? (
                      <Check className="w-4 h-4 text-[#2D241E]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#2D241E]/5">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D241E]/50 block">Boutique Desk:</span>
                    <a
                      href={`tel:${STORE_DETAILS.phoneSecondary.replace(/\s+/g, '')}`}
                      className="font-medium text-[#2D241E]/80 hover:text-[#2D241E] text-xs"
                    >
                      {STORE_DETAILS.phoneSecondary}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(STORE_DETAILS.phoneSecondary, 'phoneSecondary')}
                    className="p-1.5 text-[#2D241E]/50 hover:text-[#2D241E] hover:bg-[#FDFBF7] rounded-md transition-colors"
                    title="Copy landline"
                  >
                    {copiedType === 'phoneSecondary' ? (
                      <Check className="w-4 h-4 text-[#2D241E]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-[#EADCCB]/30 rounded-2xl border border-[#2D241E]/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2D241E]">
                  <div className="p-2 rounded-lg bg-[#FDFBF7] text-[#2D241E] border border-[#2D241E]/10">
                    <MessageCircle className="w-4 h-4 opacity-70" />
                  </div>
                  <span>WhatsApp Video Concierge</span>
                </div>
              </div>
              <p className="text-xs text-[#2D241E]/70 leading-relaxed">
                Connect with our in-store draping consultants for high-resolution video clips of sarees under natural daylight.
              </p>
              <a
                id="contact-whatsapp-chat-btn"
                href={`https://wa.me/${STORE_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Bharni Sarees, I would like to inquire about your collections.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs uppercase tracking-[0.15em] text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 opacity-80" />
                <span>Chat on WhatsApp ({STORE_DETAILS.phonePrimary})</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-[#EADCCB]/20 rounded-2xl border border-[#2D241E]/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2D241E]">
                  <div className="p-2 rounded-lg bg-[#FDFBF7] text-[#2D241E] border border-[#2D241E]/10">
                    <Mail className="w-4 h-4 opacity-70" />
                  </div>
                  <span>Official Email Inquiries</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <a
                  href={`mailto:${STORE_DETAILS.email}`}
                  className="font-medium text-[#2D241E] hover:opacity-70"
                >
                  {STORE_DETAILS.email}
                </a>
                <button
                  onClick={() => handleCopy(STORE_DETAILS.email, 'email')}
                  className="p-1.5 text-[#2D241E]/50 hover:text-[#2D241E] hover:bg-[#FDFBF7] rounded-md transition-colors"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-[#2D241E]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry / Appointment Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 border border-[#2D241E]/10 shadow-xs">
            <div className="border-b border-[#2D241E]/10 pb-4 mb-6">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D241E] font-light">
                Inquire or Schedule a Private Viewing
              </h3>
              <p className="text-xs text-[#2D241E]/70 mt-1 font-sans">
                Fill in the details below and our boutique concierge will get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-[#EADCCB]/25 rounded-2xl border border-[#2D241E]/10 space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#FDFBF7] text-[#2D241E] border border-[#2D241E]/15 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-luxury text-2xl text-[#2D241E] font-light">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-[#2D241E]/70 max-w-md mx-auto leading-relaxed">
                  We have received your inquiry regarding <span className="font-medium text-[#2D241E]">{formData.sareeInterest}</span>. Our store concierge will reach you at <span className="font-medium text-[#2D241E]">{formData.phone}</span> shortly.
                </p>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full"
                  >
                    <MessageCircle className="w-3.5 h-3.5 opacity-80" />
                    <span>Also Send on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        sareeInterest: 'Handloom Cotton & Linen',
                        visitDate: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-[#2D241E] bg-[#EADCCB]/40 hover:bg-[#EADCCB] border border-[#2D241E]/10 rounded-full"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                {submitError && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl text-amber-900 flex items-start gap-2.5 text-xs">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p>{submitError}</p>
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium underline text-amber-950"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Send directly via WhatsApp instead</span>
                      </a>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="font-medium text-[#2D241E] block">
                      Your Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. venkat Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-xl text-[#2D241E] focus:outline-none focus:border-[#2D241E]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="font-medium text-[#2D241E] block">
                      Phone / Mobile Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-xl text-[#2D241E] focus:outline-none focus:border-[#2D241E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-medium text-[#2D241E] block">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-xl text-[#2D241E] focus:outline-none focus:border-[#2D241E]"
                    />
                  </div>

                  {/* Saree Interest */}
                  <div className="space-y-1.5">
                    <label htmlFor="sareeInterest" className="font-medium text-[#2D241E] block">
                      Saree Category / Fabric of Interest
                    </label>
                    <select
                      id="sareeInterest"
                      value={formData.sareeInterest}
                      onChange={(e) => setFormData({ ...formData, sareeInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-xl text-[#2D241E] focus:outline-none focus:border-[#2D241E]"
                    >
                      <option value="Handloom Cotton & Pure Linen">Handloom Cotton & Pure Linen</option>
                      <option value="Sheer Pastel Organza">Sheer Pastel Organza & Floral Cutwork</option>
                      <option value="Flowy Printed Georgette & Chiffon">Flowy Printed Georgette & Chiffon</option>
                      <option value="Chanderi Cotton-Silk">Chanderi Cotton-Silk & Tissue</option>
                      <option value="Festive & Celebration Sarees">Festive & Celebration Brocades</option>
                      <option value="Daily & Office Wear Sarees">Daily & Office Wear Sarees</option>
                      <option value="General Boutique Visit & Draping">General Boutique Visit & Draping</option>
                    </select>
                  </div>
                </div>

                {/* Visit Date */}
                <div className="space-y-1.5">
                  <label htmlFor="visitDate" className="font-medium text-[#2D241E] block">
                    Preferred Visit Date (Optional)
                  </label>
                  <input
                    id="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-xl text-[#2D241E] focus:outline-none focus:border-[#2D241E]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-medium text-[#2D241E] block">
                    Message or Specific Colors / Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about the occasion, color preferences, or specific motifs you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-xl text-[#2D241E] focus:outline-none focus:border-[#2D241E]"
                  />
                </div>

                {/* Added note above the button */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#2D241E]/60 pt-1">
                    <Mail className="w-3.5 h-3.5 opacity-70 shrink-0" />
                    <span>Inquiries are forwarded directly to {STORE_DETAILS.email}</span>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  {/*<button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.2em] text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full transition-all disabled:opacity-70 cursor-pointer shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 opacity-80" />
                        <span>Submit Saree Inquiry</span>
                      </>
                    )}
                  </button>*/}

                  {/* Spinner and live status text */}
                  <button 
                    id="submit-inquiry-btn" 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.2em] text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full transition-all disabled:opacity-70 cursor-pointer shadow-xs"
                    >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending to Boutique Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 opacity-80" />
                        <span>Submit Saree Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
