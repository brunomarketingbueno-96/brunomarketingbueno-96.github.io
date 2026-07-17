interface LogoProps {
  isWhite?: boolean;
  hideIcon?: boolean;
}

export default function Logo({ isWhite = false, hideIcon = false }: LogoProps) {
  return (
    <div className={`flex items-center font-extrabold tracking-tighter text-3xl select-none cursor-pointer ${isWhite ? 'text-white' : ''}`}>

      {!hideIcon && (
        <svg
          className={`w-7 h-7 mr-2 mt-1 ${isWhite ? 'text-white' : 'text-amber-600'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        </svg>
      )}

      <div className="flex items-baseline">
        <span className={isWhite ? "text-white" : "bg-gradient-to-r from-amber-900 to-amber-500 bg-clip-text text-transparent drop-shadow-sm"}>
          BRUNO
        </span>
        <span className={isWhite ? "text-white ml-1.5" : "text-zinc-800"}>
          BUENO
        </span>
        <span className={isWhite ? "text-white ml-[2px]" : "text-amber-600 ml-[2px]"}>.</span>
      </div>
    </div>
  )
}