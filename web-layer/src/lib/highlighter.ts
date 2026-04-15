export function highlightKotlin(code: string) {
  // 1. Escape HTML first to prevent XSS and tag breakage
  let escapedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2. Define tokens with their regex and style
  // Order matters: Comments and Strings first to "consume" them
  const tokens = [
    { name: 'comment', regex: /\/\/. *|\/\*[\s\S]*?\*\//g, class: 'text-[#808080] italic' },
    { name: 'string', regex: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|"""[\s\S]*?"""/g, class: 'text-[#6A8759]' },
    { name: 'annotation', regex: /@[a-zA-Z_]\w*/g, class: 'text-[#BBB529]' },
    { name: 'keyword', regex: /\b(package|import|class|interface|fun|val|var|if|else|when|is|in|for|while|do|return|throw|try|catch|finally|object|companion|init|constructor|this|super|typealias|typeof|as|break|continue|enum|sealed|annotation|data|inline|noinline|crossinline|external|tailrec|operator|infix|suspend|get|set|by|field|property|receiver|param|sparam|delegate|file)\b/g, class: 'text-[#CC7832] font-bold' },
    { name: 'type', regex: /\b(Int|Long|Short|Byte|Float|Double|Boolean|Char|String|Array|List|Set|Map|Any|Unit|Nothing|Throwable)\b/g, class: 'text-[#A9B7C6]' },
    { name: 'number', regex: /\b(0x[a-fA-F0-9]+|0b[01]+|\d+\.?\d*([eE][+-]?\d+)?)\b/g, class: 'text-[#6897BB]' },
    { name: 'function', regex: /\b([a-zA-Z_]\w*)(?=\s*\()/g, class: 'text-[#FFC66D]' },
  ];

  // 3. Single-pass replacement strategy
  // We combine all regexes and use a placeholder system to avoid overlapping
  const combinedRegex = new RegExp(tokens.map(t => `(${t.regex.source})`).join('|'), 'g');

  return escapedCode.replace(combinedRegex, (match) => {
    // Find which token matched
    const tokenIndex = tokens.findIndex(t => new RegExp(`^${t.regex.source}$`).test(match));
    if (tokenIndex !== -1) {
      return `<span class="${tokens[tokenIndex].class}">${match}</span>`;
    }
    return match;
  });
}
