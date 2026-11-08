const Badge = ({ children, warna }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${warna}`}
    >
      {children}
    </span>
  );
};

export default Badge;
