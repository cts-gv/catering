import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const pad = (n: number) => String(n).padStart(2, '0');
const toISO = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`; // m is 0-based

// Turns entries like "Smith Wedding 1/27/2027" into a Set of "2027-01-27".
// The text before the date is just a note for the owner; it is ignored.
const blockedSet = new Set<string>();
for (const entry of siteConfig.blockedDates as readonly string[]) {
  const match = entry.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (match) {
    blockedSet.add(toISO(Number(match[3]), Number(match[1]) - 1, Number(match[2])));
  } else if (import.meta.env?.DEV) {
    console.warn(`blockedDates: no M/D/YYYY date found in "${entry}"`);
  }
}

export const isDateBlocked = (iso: string) => blockedSet.has(iso);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

type Props = {
  icon: React.ReactNode;
  label: string;
  value: string; // "YYYY-MM-DD" or ""
  onChange: (v: string) => void;
};

export default function DatePicker({ icon, label, value, onChange }: Props) {
  const now = new Date();
  const todayISO = toISO(now.getFullYear(), now.getMonth(), now.getDate());

  const initial = value ? new Date(`${value}T00:00:00`) : now;
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(initial.getFullYear());
  const [viewMonth, setViewMonth] = useState(initial.getMonth());
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const cells = useMemo(() => {
    const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    return [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)] as (number | null)[];
  }, [viewYear, viewMonth]);

  const atCurrentMonth = viewYear === now.getFullYear() && viewMonth === now.getMonth();

  const shiftMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const display = value
    ? new Date(`${value}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Select a date...';

  return (
    <div ref={wrapRef} className="relative">
      <label className="block text-sm font-medium text-[#3A3A3A] mb-1.5">
        <span className="flex items-center gap-1.5">
          {icon}
          {label}
        </span>
      </label>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`w-full text-left bg-[#F8F5F0] border border-[#E0D5C3] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8742C]/40 focus:border-[#B8742C] transition-all ${
          value ? 'text-[#1A1A1A]' : 'text-[#8A8A8A]'
        }`}
      >
        {display}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose event date"
          className="absolute z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] bg-white border border-[#E0D5C3] rounded-2xl shadow-xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              disabled={atCurrentMonth}
              aria-label="Previous month"
              className="p-1.5 rounded-lg hover:bg-[#F8F5F0] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-semibold text-[#1A1A1A]">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              aria-label="Next month"
              className="p-1.5 rounded-lg hover:bg-[#F8F5F0]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#6A6A6A] mb-1">
            {WEEKDAYS.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <div key={`e${i}`} />;
              const iso = toISO(viewYear, viewMonth, day);
              const blocked = isDateBlocked(iso);
              const past = iso < todayISO;
              const disabled = blocked || past;
              const selected = iso === value;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={disabled}
                  title={blocked ? 'Unavailable' : undefined}
                  onClick={() => {
                    onChange(iso);
                    setOpen(false);
                  }}
                  className={`h-9 rounded-lg text-sm transition-colors ${
                    selected
                      ? 'bg-[#B8742C] text-white font-semibold'
                      : disabled
                        ? 'text-[#C4C4C4] bg-[#F1EEE9] line-through cursor-not-allowed'
                        : 'text-[#1A1A1A] hover:bg-[#F3E6D3]'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {value && (
            <button
              type="button"
              onClick={() => {
                onChange('');
                setOpen(false);
              }}
              className="mt-3 text-xs text-[#6A6A6A] hover:text-[#B8742C] underline"
            >
              Clear date
            </button>
          )}
        </div>
      )}
    </div>
  );
}
