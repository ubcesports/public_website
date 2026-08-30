import Disclosure from "./Disclosure";

const faqs = [
  {
    question: "What games can I play in the Lounge?",
    answer: (
      <>
        We have most popular games installed on our PCs, however if you have a
        different game you want to play you{" "}
        <span className="font-bold text-white">
          may ask an executive if you can install it
        </span>{" "}
        onto a PC. Please note that we may not be able to accommodate installing
        larger games or apps since we have limited storage space on our
        computers.
      </>
    ),
  },
  {
    question: "Can I bring friends to the Lounge?",
    answer: (
      <>
        Everyone who enters must have a membership or a day pass to play in the
        lounge. Please also note we cannot guarantee you will have adjacent
        seats depending on availability.
      </>
    ),
  },
  {
    question: "Can I bring my own peripherals?",
    answer: (
      <>
        You may bring any peripherals (e.g. controllers, mice, keyboards),
        however UBCEA is not responsible for loss or theft of any personal
        items.
      </>
    ),
  },
] as const;

const LoungeFAQ = () => {
  return (
    <section id="faq" className="w-full scroll-mt-24 px-5 pt-10 pb-20">
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
          FAQ
        </h2>

        <div className="flex flex-col gap-5">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} summary={faq.question}>
              <p className="font-sans text-base leading-relaxed text-white/75 sm:text-lg">
                {faq.answer}
              </p>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoungeFAQ;
