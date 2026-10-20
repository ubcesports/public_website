import SectionTitle from "./SectionTitle";

const credits = [
  { role: "Development", names: "Sudi, Ethan, Jon, Rudra" },
  { role: "UI Design", names: "Jennifer Chen, Brahm Wongwandanee" },
  { role: "Photography", names: "Tyler Nie" },
] as const;

const WebsiteCredits = () => {
  return (
    <section className="w-full pt-6 pb-16">
      <SectionTitle subtle>Website Credits</SectionTitle>

      <dl className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-3 sm:px-8">
        {credits.map(({ role, names }) => (
          <div key={role}>
            <dt className="font-game text-xs font-bold tracking-widest text-header-light-blue uppercase sm:text-sm">
              {role}
            </dt>
            <dd className="mt-1 font-sans text-sm text-white sm:text-base">{names}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default WebsiteCredits;
