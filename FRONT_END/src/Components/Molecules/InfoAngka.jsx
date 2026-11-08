const InfoAngka = ({ angka, label }) => {
  return (
    <div className="flex flex-col px-5 first:pl-0">
      <span className="text-xl font-extrabold text-gray-900">{angka}</span>
      <span className="text-[11px] font-medium text-gray-500">{label}</span>
    </div>
  );
};

export default InfoAngka;
