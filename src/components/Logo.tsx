export default function Logo({ className }: { className?: string }) {
  // color: #5D5FEF
  return (
    <a href="/" className={`${className} p-4 flex items-center space-x-1`}>
      <svg width="18" height="28" xmlns="http://www.w3.org/2000/svg" className="mb-1">
        <circle cx="0" cy="9" r="8" stroke="black" strokeWidth="0" fill="#5D5FEF" />
        <circle cx="9" cy="18" r="9" stroke="black" strokeWidth="0" fill="#5D5FEF" />
      </svg>
      <div className="text-[28px] font-[661] text-primary-main">square</div>
    </a>
  );
}
