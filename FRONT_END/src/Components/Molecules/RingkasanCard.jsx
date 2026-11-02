const RingkasanCard = ({ title, value, caption, icon, captionIcon, warnaAngka, warnaIkon }) => {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg text-gray-800">{title}</h2>
          <p className={`mt-1 text-4xl font-bold sm:text-5xl ${warnaAngka}`}>{value}</p>
        </div>

        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${warnaIkon}`}>
          <ion-icon name={icon} className="text-3xl" />
        </div>
      </div>

      <p className="mt-10 flex items-center gap-2 text-gray-700">
        <ion-icon name={captionIcon} className="text-lg" />
        {caption}
      </p>
    </article>
  );
};

export default RingkasanCard;
