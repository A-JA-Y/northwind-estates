// Floating Call + WhatsApp buttons, fixed to the bottom-right corner of every page.
// Render once in the root layout. Numbers accept any format ("+91 98108 90353",
// "919810890353", "9810890353"); 10-digit numbers are treated as Indian (+91).
// z-30 keeps them at header level, below enquiry modals and mobile menus (z-40/z-50).

const toDigits = (value) => {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
};

const pretty = (digits) =>
  digits.length === 12 && digits.startsWith("91")
    ? `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`
    : `+${digits}`;

export default function FloatingContactButtons({
  phone,
  whatsapp = phone,
  message = "Hi, I am interested in this project. Please share the details.",
  callClassName = "bg-neutral-900 hover:bg-neutral-700",
  className = "bottom-4 right-4 md:bottom-6 md:right-6",
}) {
  const callDigits = toDigits(phone);
  const waDigits = toDigits(whatsapp);
  if (!callDigits && !waDigits) return null;

  const button =
    "flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl ring-4 ring-white/60 transition-transform duration-300 hover:scale-110 md:h-14 md:w-14";

  return (
    <div className={`fixed z-30 flex flex-col items-center gap-3 print:hidden ${className}`}>
      {callDigits ? (
        <a
          href={`tel:+${callDigits}`}
          aria-label={`Call ${pretty(callDigits)}`}
          title={`Call ${pretty(callDigits)}`}
          className={`${button} ${callClassName}`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      ) : null}
      {waDigits ? (
        <a
          href={`https://wa.me/${waDigits}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp at ${pretty(waDigits)}`}
          title={`WhatsApp ${pretty(waDigits)}`}
          className={`${button} bg-[#25D366] hover:bg-[#1ebe57]`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.46 9.48-9.46 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.05.63C5.77.63.66 5.73.66 12.01c0 2 .52 3.96 1.52 5.69L.57 23.5l5.94-1.56a11.35 11.35 0 0 0 5.53 1.41h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05z" />
          </svg>
        </a>
      ) : null}
    </div>
  );
}
