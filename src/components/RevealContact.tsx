import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

// Shows a "tap to show" button instead of the real phone/email. The value is decoded
// only after a real tap/click, so scrapers reading the page source or JS never see it.
type Props = {
  type: 'phone' | 'email';
  className?: string;
  iconClassName?: string;
};

const decode = (v: string) => {
  try {
    return atob(v);
  } catch {
    return '';
  }
};

export default function RevealContact({ type, className = '', iconClassName = 'w-4 h-4' }: Props) {
  const [value, setValue] = useState('');
  const Icon = type === 'phone' ? Phone : Mail;
  const encoded = type === 'phone' ? siteConfig.business.phoneEncoded : siteConfig.business.emailEncoded;

  if (value) {
    const href = type === 'phone' ? `tel:${value.replace(/[^\d+]/g, '')}` : `mailto:${value}`;
    return (
      <a href={href} className={`flex items-center gap-2 ${className}`}>
        <Icon className={iconClassName} />
        {value}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        if (!e.isTrusted) return; // ignore script-generated clicks
        setValue(decode(encoded));
      }}
      className={`flex items-center gap-2 text-left underline decoration-dotted underline-offset-4 ${className}`}
    >
      <Icon className={iconClassName} />
      {type === 'phone' ? 'Tap to show phone number' : 'Tap to show email'}
    </button>
  );
}
