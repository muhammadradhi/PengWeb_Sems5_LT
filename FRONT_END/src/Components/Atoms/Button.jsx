const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  let warna = "bg-[#2186ff] text-white hover:bg-[#086bdc]";
  if (variant === "outline") {
    warna = "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold ${warna} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
