const StatCard = ({ title, icon, value, caption, note, noteIcon }) => {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-gray-600 sm:text-base">
          {title}
        </h2>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
          <ion-icon name={icon} className="text-2xl" />
        </div>
      </div>

      <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {value}
      </p>

      <p className="mt-2 text-xs text-gray-500 sm:text-sm">{caption}</p>

      <div className="mt-5 flex items-center gap-2 rounded-md bg-[#f2f2f6] px-3 py-3 text-xs text-gray-600 sm:text-sm">
        <ion-icon name={noteIcon} className="shrink-0 text-lg" />
        <span>{note}</span>
      </div>
    </article>
  );
};

export default StatCard;
