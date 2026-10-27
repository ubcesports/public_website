import Image from "next/image";

interface Director {
  name: string;
  role: string;
  image: string;
}

interface DirectorsProps {
  directors: Director[];
}

export default function Directors({ directors }: DirectorsProps) {
  return (
    <section id="directors" className="w-full bg-bg-dark-blue pb-10 sm:pb-14">
      <h2 className="flex min-h-24 w-full items-center justify-center bg-bg-dark-blue px-5 py-6 text-center font-game text-[clamp(1.75rem,2.778vw,3rem)] leading-none font-bold uppercase text-white lg:h-[134px] lg:px-[50px] lg:py-[37px]">
        Directors
      </h2>
      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:h-[490px]">
          {directors.map((director) => (
            <article
              key={director.name}
              className="flex min-w-0 min-h-[210px] w-full flex-col items-center justify-center gap-[10px] p-[10px] text-center text-white lg:h-full"
            >
              <div
                aria-hidden="true"
                className="relative aspect-square w-[300px] max-w-full shrink-0 overflow-hidden"
              >
                <Image
                  src={director.image}
                  alt=""
                  fill
                  sizes="300px"
                  className="-translate-x-[10.7%] object-contain"
                />
              </div>
              <h3 className="mx-auto w-fit max-w-full font-game text-[clamp(1.25rem,1.852vw,2rem)] leading-[1] font-bold text-white">
                {director.name}
              </h3>
              <p className="font-sans text-[clamp(1rem,1.389vw,1.5rem)] leading-[1] text-accent-blue">
                {director.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
