import Disclosure from "./Disclosure";

const pcPeripherals = [
  "240 Hz Lenovo Legion Monitors",
  "Lenovo Legion Membrane Keyboards",
  "DrunkDeer Hall Effect Keyboards",
  "Secret Lab TITAN Evo Gaming Chairs (featuring 5 special edition MSI 2025 chairs)",
] as const;

const arcadeCabs = [
  {
    name: "CHUNITHM",
    cabs: "1 Cab",
    details: [
      "$1 / Set (3 Songs)",
      "Mythos Private Server",
      "Phone holder for recording",
    ],
  },
  {
    name: "WACCA",
    cabs: "1 Cab",
    details: ["$1 / Set (3 Songs)", "Mythos Private Server"],
  },
] as const;

const listClasses =
  "mt-1 ml-5 list-disc font-sans text-base text-white/90 marker:text-teal sm:text-lg";

const WeOffer = () => {
  return (
    <section id="we-offer" className="w-full scroll-mt-24 px-5 py-10">
      <div className="mx-auto w-full max-w-4xl">
        <h2
          className="
            mb-5
            bg-linear-to-r from-teal to-darker-light-blue
            bg-clip-text
            font-header text-3xl uppercase text-transparent
            sm:text-4xl lg:text-5xl
          "
        >
          We offer
        </h2>

        <div className="flex flex-col gap-6">
          <Disclosure summary="20 High Spec PCs">
            <p className="font-sans text-base text-white/90 sm:text-lg">
              <span className="font-bold text-white">CPU:</span> Intel&reg;
              Core&trade; i7-11700
            </p>
            <p className="font-sans text-base text-white/90 sm:text-lg">
              <span className="font-bold text-white">GPU:</span> GeForce GTX
              1660 SUPER
            </p>
            <p className="font-sans text-base font-bold text-white sm:text-lg">
              Peripherals:
            </p>
            <ul className={listClasses}>
              {pcPeripherals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Disclosure>

          <Disclosure summary="Arcade Cabs">
            {arcadeCabs.map((cab) => (
              <div key={cab.name} className="mb-3 last:mb-0">
                <p className="font-sans text-base text-white/90 sm:text-lg">
                  <span className="font-bold text-white">{cab.name}:</span>{" "}
                  {cab.cabs}
                </p>
                <ul className={listClasses}>
                  {cab.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Disclosure>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
