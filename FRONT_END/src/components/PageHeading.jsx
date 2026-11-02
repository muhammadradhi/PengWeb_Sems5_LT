const PageHeading = ({ badge, title, description, as: Heading = "h1" }) => {
  return (
    <section className="mb-5">
      <span className="inline-flex items-center gap-2 rounded-sm bg-[#e9e9e2] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#28523b]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#28523b]" />
        {badge}
      </span>

      <Heading className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        {title}
      </Heading>

      <p className="mt-2 text-sm leading-relaxed text-[#626962]">
        {description}
      </p>
    </section>
  );
};

export default PageHeading;
