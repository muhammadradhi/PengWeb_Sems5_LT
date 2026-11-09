const MenuStatCard = ({ title, value, caption, icon, warnaAngka }) => {
  return (
    <article className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-6">
      <div>
        <h2 className="text-sm text-gray-700">{title}</h2>
        <p className={`mt-2 font-serif text-2xl font-bold ${warnaAngka}`}>
          {value}
        </p>
        <p className="mt-2 text-xs text-gray-500">{caption}</p>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2186ff] text-white">
        <ion-icon name={icon} className="text-2xl" />
      </div>
    </article>
  );
};

export default MenuStatCard;
