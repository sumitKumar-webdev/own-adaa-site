type SocialIconProps = {
  className?: string;
};

export function InstagramIcon({ className = "h-[1.05rem] w-[1.05rem]" }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-[1.05rem] w-[1.05rem]" }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0-4.2-1.2L4.5 20l1.3-3.1A8 8 0 0 0 12 20Z" />
      <path d="M9.4 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.5l.6 1.3c.1.2.1.4 0 .6l-.3.5c-.1.2-.2.3 0 .6.4.7 1 1.2 1.7 1.6.2.1.4.1.6 0l.5-.3c.2-.1.4-.1.6 0l1.3.6c.4.2.5.4.5.6v.5c0 .2 0 .4-.4.6-.4.2-1 .3-1.6.2-1-.2-2.1-.8-3.2-1.8-1-1-1.7-2.1-1.9-3.2-.1-.6 0-1.2.3-1.6Z" />
    </svg>
  );
}
