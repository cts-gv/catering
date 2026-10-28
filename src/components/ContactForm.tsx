import { useState, useMemo } from 'react';
import { Calendar, Users, Mail, Phone, User, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

type EventKey = keyof typeof siteConfig.quotePricing;

type GuestLimits = { minGuests?: number; maxGuests?: number };

const getLimits = (eventType: EventKey | ''): GuestLimits =>
  eventType ? (siteConfig.quotePricing[eventType] as GuestLimits) : {};

const eventOptions = (
  Object.entries(siteConfig.quotePricing) as [EventKey, (typeof siteConfig.quotePricing)[EventKey]][]
).map(([value, pricing]) => ({ value, label: pricing.label }));

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '' as EventKey | '',
    eventDate: '',
    guests: '',
    message: '',
  });
  const [phoneConsent, setPhoneConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [specialOffersConsent, setSpecialOffersConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const limits = getLimits(form.eventType);

  const quote = useMemo(() => {
    if (!form.eventType || !form.guests) return null;
    const pricing = siteConfig.quotePricing[form.eventType as EventKey];
    if (!pricing) return null;
    const guestCount = parseInt(form.guests, 10);
    if (isNaN(guestCount) || guestCount < 1) return null;
    const { minGuests, maxGuests } = pricing as GuestLimits;
    if (minGuests !== undefined && guestCount < minGuests) return null;
    if (maxGuests !== undefined && guestCount > maxGuests) return null;
    return pricing.perGuest * guestCount + pricing.baseFee;
  }, [form.eventType, form.guests]);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'eventType') {
        // Start the guest count at the minimum and keep it within the allowed range
        const { minGuests, maxGuests } = getLimits(value as EventKey | '');
        const current = parseInt(next.guests, 10);
        if (minGuests !== undefined && (isNaN(current) || current < minGuests)) {
          next.guests = String(minGuests);
        } else if (maxGuests !== undefined && current > maxGuests) {
          next.guests = String(maxGuests);
        }
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.eventType || !phoneConsent || !emailConsent) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields and agree to phone and email communication.');
      return;
    }

    const { minGuests, maxGuests } = getLimits(form.eventType);
    const guestCount = parseInt(form.guests, 10);
    if (minGuests !== undefined && (isNaN(guestCount) || guestCount < minGuests)) {
      setStatus('error');
      setErrorMsg(`${siteConfig.quotePricing[form.eventType as EventKey].label} requires a minimum of ${minGuests} guests.`);
      return;
    }
    if (maxGuests !== undefined && guestCount > maxGuests) {
      setStatus('error');
      setErrorMsg(`${siteConfig.quotePricing[form.eventType as EventKey].label} allows a maximum of ${maxGuests} guests. Please call us for larger events.`);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const eventLabel = siteConfig.quotePricing[form.eventType as EventKey].label;

      const response = await fetch(siteConfig.formspree.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          event_type: eventLabel,
          event_date: form.eventDate || 'Not provided',
          guests: form.guests || 'Not provided',
          message: form.message || 'Not provided',
          quote_estimate: quote !== null ? `$${quote.toLocaleString()}` : 'Not calculated',
          phone_communication_consent: phoneConsent ? 'Yes' : 'No',
          email_communication_consent: emailConsent ? 'Yes' : 'No',
          special_offers_consent: specialOffersConsent ? 'Yes' : 'No',
          _subject: `New ${eventLabel} inquiry from ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: '',
      });
      setPhoneConsent(false);
      setEmailConsent(false);
      setSpecialOffersConsent(false);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5EDE0]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#B8742C] font-sans text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            Plan Your Event
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your event and get an instant quote. We'll review your request and get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Quote display panel */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-[#1A1A1A] rounded-2xl p-7 h-full flex flex-col justify-center">
              <h3 className="font-serif text-xl font-bold text-white mb-2">Instant Quote Estimate</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Select your event type and number of guests to see an estimated range. Final pricing is customized to your specific needs.
              </p>

              <div className="bg-white/5 rounded-xl p-6 text-center">
                {quote !== null ? (
                  <>
                    <p className="text-white/50 text-xs tracking-wider uppercase mb-2">Estimated Total</p>
                    <p className="font-serif text-4xl sm:text-5xl font-bold text-[#E8B86D]">
                      ${quote.toLocaleString()}
                    </p>
                    <p className="text-white/40 text-xs mt-3">
                      Includes base fee + per-guest pricing. Final quote may vary based on menu selections and logistics.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-white/40 text-sm leading-relaxed py-4">
                      Fill in the event type and guest count to see your estimated quote.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-4 h-4 text-[#E8B86D]" />
                  <span>{siteConfig.business.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-4 h-4 text-[#E8B86D]" />
                  <span>{siteConfig.business.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-7 shadow-md space-y-5"
            >
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Inquiry Submitted!</h3>
                  <p className="text-[#6A6A6A] text-sm leading-relaxed max-w-sm mx-auto">
                    We've received your details. Gabe will personally review your request and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-[#B8742C] font-semibold text-sm hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      icon={<User className="w-4 h-4" />}
                      label="Full Name"
                      required
                      value={form.name}
                      onChange={(v) => handleChange('name', v)}
                      placeholder="Jane Doe"
                      type="text"
                    />
                    <Field
                      icon={<Phone className="w-4 h-4" />}
                      label="Phone"
                      required
                      value={form.phone}
                      onChange={(v) => handleChange('phone', v)}
                      placeholder="(555) 123-4567"
                      type="tel"
                    />
                  </div>

                  <Field
                    icon={<Mail className="w-4 h-4" />}
                    label="Email"
                    required
                    value={form.email}
                    onChange={(v) => handleChange('email', v)}
                    placeholder="jane@email.com"
                    type="email"
                  />

                  <div className="space-y-3 rounded-xl border border-[#E0D5C3] bg-[#FFFCF7] p-4">
                    <p className="text-sm font-semibold text-[#1A1A1A]">Communication preferences</p>
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-[#4A4A4A]">
                      <input type="checkbox" checked={phoneConsent} onChange={(e) => setPhoneConsent(e.target.checked)} required className="mt-1 h-4 w-4 accent-[#B8742C]" />
                      <span>I agree to be contacted by phone or text about this inquiry and event arrangements. <span className="text-red-600">*</span></span>
                    </label>
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-[#4A4A4A]">
                      <input type="checkbox" checked={emailConsent} onChange={(e) => setEmailConsent(e.target.checked)} required className="mt-1 h-4 w-4 accent-[#B8742C]" />
                      <span>I agree to receive emails about this inquiry, quotes, and event arrangements. <span className="text-red-600">*</span></span>
                    </label>
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-[#4A4A4A]">
                      <input type="checkbox" checked={specialOffersConsent} onChange={(e) => setSpecialOffersConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#B8742C]" />
                      <span>Yes, I’d also like occasional emails about monthly specials, seasonal offers, and promotions. This is optional and I can unsubscribe at any time.</span>
                    </label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] mb-1.5">
                        Event Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.eventType}
                          onChange={(e) => handleChange('eventType', e.target.value)}
                          required
                          className="w-full bg-[#F8F5F0] border border-[#E0D5C3] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#B8742C]/40 focus:border-[#B8742C] transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select event type...</option>
                          {eventOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Field
                      icon={<Calendar className="w-4 h-4" />}
                      label="Event Date"
                      value={form.eventDate}
                      onChange={(v) => handleChange('eventDate', v)}
                      placeholder=""
                      type="date"
                    />
                  </div>

                  <Field
                    icon={<Users className="w-4 h-4" />}
                    label="Number of Guests"
                    value={form.guests}
                    onChange={(v) => handleChange('guests', v)}
                    placeholder="e.g. 75"
                    type="number"
                    min={limits.minGuests}
                    max={limits.maxGuests}
                    required={limits.minGuests !== undefined}
                    hint={
                      limits.minGuests !== undefined || limits.maxGuests !== undefined
                        ? `${limits.minGuests !== undefined ? `Minimum ${limits.minGuests}` : ''}${limits.minGuests !== undefined && limits.maxGuests !== undefined ? ', ' : ''}${limits.maxGuests !== undefined ? `maximum ${limits.maxGuests}` : ''} guests for this event type.`
                        : undefined
                    }
                  />

                  <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4" />
                        Additional Details
                      </span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      placeholder="Tell us about your event vision, dietary preferences, specific requests..."
                      className="w-full bg-[#F8F5F0] border border-[#E0D5C3] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#B8742C]/40 focus:border-[#B8742C] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#B8742C] hover:bg-[#A06420] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Get My Quote & Submit'
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type: string;
  required?: boolean;
  min?: number;
  max?: number;
  hint?: string;
};

function Field({ icon, label, value, onChange, placeholder, type, required, min, max, hint }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#3A3A3A] mb-1.5">
        <span className="flex items-center gap-1.5">
          {icon}
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        className="w-full bg-[#F8F5F0] border border-[#E0D5C3] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#B8742C]/40 focus:border-[#B8742C] transition-all"
      />
      {hint && <p className="text-xs text-[#6A6A6A] mt-1.5">{hint}</p>}
    </div>
  );
}
