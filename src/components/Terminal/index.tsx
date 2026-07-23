import { useEffect, useState } from "react";

const CODE_LINES = [
  { text: "const developer: FullStack = {", color: "text-zinc-800 dark:text-zinc-300" },
  {
    text: '    name: "Willian Daniel",', parts: [
      { t: "    name: ", c: "text-zinc-500 dark:text-zinc-400" },
      { t: '"Willian Daniel"', c: "text-amber-600 dark:text-amber-300" },
      { t: ",", c: "text-zinc-800 dark:text-zinc-300" },
    ]
  },
  {
    text: '    role: "Software Engineer",', parts: [
      { t: "    role: ", c: "text-zinc-500 dark:text-zinc-400" },
      { t: '"Software Engineer"', c: "text-amber-600 dark:text-amber-300" },
      { t: ",", c: "text-zinc-800 dark:text-zinc-300" },
    ]
  },
  { text: "" },
  {
    text: "    techStack: [", parts: [
      { t: "    techStack: ", c: "text-zinc-500 dark:text-zinc-400" },
      { t: "[", c: "text-zinc-800 dark:text-zinc-300" },
    ]
  },
  { text: '        "React.js", "TypeScript", "Node.js",', color: "text-emerald-600 dark:text-emerald-400" },
  { text: '        "Next.js", "Tailwind", "PostgreSQL"', color: "text-emerald-600 dark:text-emerald-400" },
  { text: "    ],", color: "text-zinc-800 dark:text-zinc-300" },
  { text: "" },
  {
    text: "    build: () => {", parts: [
      { t: "    ", c: "text-zinc-800 dark:text-zinc-300" },
      { t: "build", c: "text-indigo-600 dark:text-indigo-400" },
      { t: "() => {", c: "text-zinc-800 dark:text-zinc-300" },
    ]
  },
  { text: "        return (", color: "text-zinc-800 dark:text-zinc-300" },
  { text: "            <InnovativeSolutions />", color: "text-orange-600 dark:text-orange-400" },
  { text: "        );", color: "text-zinc-800 dark:text-zinc-300" },
  { text: "    }", color: "text-zinc-800 dark:text-zinc-300" },
  { text: "};", color: "text-zinc-800 dark:text-zinc-300" },
];

export default function Terminal() {
  const [typingState, setTypingState] = useState({ lineIdx: 0, charIdx: 0 });

  useEffect(() => {
    if (typingState.lineIdx >= CODE_LINES.length) return;

    const currentLine = CODE_LINES[typingState.lineIdx];
    const len = currentLine.text.length;

    let timeoutId: ReturnType<typeof setTimeout>;

    if (typingState.charIdx > len) {
      timeoutId = setTimeout(() => {
        setTypingState((prev) => ({ lineIdx: prev.lineIdx + 1, charIdx: 0 }));
      }, len === 0 ? 60 : 70);
    } else {
      timeoutId = setTimeout(() => {
        setTypingState((prev) => ({ ...prev, charIdx: prev.charIdx + 1 }));
      }, len === 0 ? 60 : 26);
    }

    return () => clearTimeout(timeoutId);
  }, [typingState]);

  const renderLine = (line: typeof CODE_LINES[0], limit?: number) => {
    const renderLimit = limit !== undefined ? limit : line.text.length;

    if (!("parts" in line) || !line.parts) {
      return (
        <span className={(line as typeof CODE_LINES[0]).color}>
          {line.text.slice(0, renderLimit)}
        </span>
      );
    }

    let count = 0;
    return line.parts.map((part, idx) => {
      if (count >= renderLimit) return null;
      const rem = renderLimit - count;
      const textToRender = part.t.slice(0, rem);
      count += part.t.length;
      return (
        <span key={idx} className={part.c}>
          {textToRender}
        </span>
      );
    });
  };

  return (
    <div className="z-10 flex-1 rounded-br-xl flex items-center justify-center md:justify-end">
      <div className="scale-y-95 w-full max-w-xl xl:max-w-2xl rounded-xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-colors duration-300">

        <div className="relative flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-zinc-500 dark:text-zinc-400 text-xs font-mono font-medium transition-colors duration-300">
            portfolio.tsx
          </span>
        </div>

        <div className="p-4 md:p-6 pl-6 md:pl-10 text-[11px] md:text-[13px] leading-5 md:leading-6 font-mono bg-gray-50 dark:bg-zinc-900/40 h-64 md:h-[calc(100vh-12rem)] overflow-hidden transition-colors duration-300">
          {CODE_LINES.slice(0, typingState.lineIdx).map((line, idx) => (
            <span key={idx} className="block whitespace-pre">
              {renderLine(line)}
            </span>
          ))}

          {typingState.lineIdx < CODE_LINES.length && (
            <span className="block whitespace-pre">
              {renderLine(CODE_LINES[typingState.lineIdx], typingState.charIdx)}
              <span className="inline-block w-1.5 h-4 bg-zinc-400 dark:bg-zinc-500 align-middle animate-pulse ml-px"></span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
