import React, { useState } from 'react';
import { Navigation, Send, CheckCircle2, MapPin, AlertCircle } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';
import { EnquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number to submit an enquiry.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Plan Your Stay"
      className="py-20 lg:py-28 bg-[#F6F1E8] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
            RESERVATIONS & VISIT ASSISTANCE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium mt-2">
            Plan Your Stay
          </h2>
          <p className="mt-3 font-sans-clean text-base text-[#171717]/75">
            Submit your arrival details or travel questions directly, or get road directions to Hotel Kamla Vihar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Hotel Details & Verified Location Info */}
          <div className="lg:col-span-5 space-y-8 bg-[#FFFFFF] border border-[#D8C8AE] p-8 sm:p-10 rounded-xs shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-semibold">
                HOTEL DESTINATION
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#171717] font-semibold mt-1">
                Hotel Kamla Vihar
              </h3>
              <p className="text-sm font-medium text-[#B99A5B] mt-0.5">
                होटल कमला विहार
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#D8C8AE]/60 text-sm font-sans-clean text-[#171717]/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#B99A5B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#171717]">Address</div>
                  <div className="mt-1 leading-relaxed">
                    Ward Number 16,<br />
                    Vimla Pipe House and Company,<br />
                    Anwari, Mohania,<br />
                    Bihar 821109
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F6F1E8]/70 border border-[#D8C8AE]/50 rounded-xs text-xs text-[#171717]/70 leading-relaxed">
                <strong className="text-[#171717]">Note on direct contact:</strong> An official phone number has not been published for this listing. You can reach the property in person in Anwari, Mohania, or send your visit enquiry using the form.
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8C8AE]/60">
              <a
                id="contact-get-directions-btn"
                href={HOTEL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#B99A5B] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#a6884a] transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D8C8AE] p-8 sm:p-10 rounded-xs shadow-xs">
            <h3 className="font-serif-luxury text-2xl text-[#171717] font-medium mb-2">
              Send an Enquiry
            </h3>
            <p className="font-sans-clean text-xs sm:text-sm text-[#171717]/70 mb-6">
              Let us know your estimated arrival date or room requirements.
            </p>

            {isSubmitted ? (
              <div
                id="enquiry-submission-success"
                className="py-10 px-6 text-center space-y-4 bg-[#F6F1E8]/60 border border-[#B99A5B]/30 rounded-xs"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-luxury text-xl font-medium text-[#171717]">
                  Enquiry Recorded
                </h4>
                <p className="font-sans-clean text-sm text-[#171717]/75 max-w-md mx-auto">
                  Thank you, <strong className="text-[#171717]">{formData.name}</strong>. Your enquiry for Hotel Kamla Vihar has been noted. Please keep your phone <strong className="text-[#171717]">{formData.phone}</strong> accessible.
                </p>
                <div className="pt-2">
                  <button
                    id="enquiry-reset-btn"
                    type="button"
                    onClick={handleReset}
                    className="text-xs uppercase tracking-wider text-[#B99A5B] font-semibold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-[#171717]/80 mb-1.5">
                    Your Name <span className="text-[#B99A5B]">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 bg-[#F6F1E8]/50 border border-[#D8C8AE] rounded-xs text-sm text-[#171717] placeholder:text-[#171717]/40 focus:outline-hidden focus:border-[#B99A5B] focus:bg-[#FFFFFF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#171717]/80 mb-1.5">
                    Your Phone Number <span className="text-[#B99A5B]">*</span>
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 bg-[#F6F1E8]/50 border border-[#D8C8AE] rounded-xs text-sm text-[#171717] placeholder:text-[#171717]/40 focus:outline-hidden focus:border-[#B99A5B] focus:bg-[#FFFFFF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#171717]/80 mb-1.5">
                    Message / Travel Details (Optional)
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide your expected arrival date, travel requirements, or questions..."
                    className="w-full px-4 py-3 bg-[#F6F1E8]/50 border border-[#D8C8AE] rounded-xs text-sm text-[#171717] placeholder:text-[#171717]/40 focus:outline-hidden focus:border-[#B99A5B] focus:bg-[#FFFFFF] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="enquiry-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#171717] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#2e2e2e] transition-all shadow-xs"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#D8C8AE]" />
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
