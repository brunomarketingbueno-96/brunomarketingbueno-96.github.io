interface CallToActionProps {
  buttonText: string;
  helperText?: string;
  whatsappMessage: string;
}

export default function CallToAction({ buttonText, helperText, whatsappMessage }: CallToActionProps) {
  const whatsappNumber = "5545991566359";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="mt-16 text-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 group"
      >
        {buttonText}
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
      {helperText && (
        <p className="mt-4 text-sm text-zinc-500 font-medium">
          {helperText}
        </p>
      )}
    </div>
  );
}
