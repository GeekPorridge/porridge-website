"use client";

import clsx from "clsx";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CopyEmailButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={clsx(
        "p-1 px-2.5 rounded text-[9px] font-mono transition-colors flex items-center space-x-1 cursor-pointer",
        copied
          ? "bg-emerald-100 text-emerald-700"
          : "bg-brand-bone/50 hover:bg-brand-dark hover:text-brand-beige",
      )}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      <span>{copied ? "COPIED" : "COPY"}</span>
    </button>
  );
};

export default CopyEmailButton;
