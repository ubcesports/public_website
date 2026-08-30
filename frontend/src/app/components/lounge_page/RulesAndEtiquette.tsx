const RulesAndEtiquette = () => {
  return (
    <section id="rules" className="w-full scroll-mt-24 px-5 py-10">
      <div className="mx-auto w-full max-w-4xl">
        <h2
          className="
            mb-5
            bg-linear-to-r from-white to-header-light-blue
            bg-clip-text
            font-header text-3xl uppercase text-transparent
            sm:text-4xl lg:text-5xl
          "
        >
          Rules &amp; Etiquette
        </h2>

        <p className="font-sans text-base leading-relaxed text-white/90 sm:text-lg">
          <span className="font-bold text-white">
            All lounge visitors (including UBCEA executives)
          </span>{" "}
          must follow these guidelines or they may be removed from the lounge.
          If you are ever unsure, please ask a UBCEA executive.
        </p>

        <p className="mt-5 font-sans text-base leading-relaxed text-white/90 sm:text-lg">
          Please bring a{" "}
          <span className="font-bold text-white">piece of identification</span>{" "}
          with you (e.g. UBC Card, Student ID or Government-issued ID) which
          will be kept at the front desk for the duration of your stay. Remember
          to pick it up before you leave!
        </p>

        <ul className="mt-6 ml-5 flex list-disc flex-col gap-2 font-sans text-base text-white/90 marker:text-teal sm:text-lg">
          <li>
            <span className="font-bold text-white">
              Computer usage times must be followed for the user&rsquo;s
              membership
            </span>
            <ul className="mt-1 ml-5 list-disc marker:text-header-light-blue">
              <li>2 hours with a 30 minute break for lounge access members</li>
            </ul>
          </li>

          <li>
            <span className="font-bold text-white">
              No food or drinks are allowed in the lounge
            </span>
            <ul className="mt-1 ml-5 flex list-disc flex-col gap-1 marker:text-header-light-blue">
              <li>Only containers with sealed lids and Red Bull are allowed</li>
              <li>Outside drinks can be kept on the table at the front</li>
            </ul>
          </li>

          <li>
            Please keep your belongings safe, as{" "}
            <span className="font-bold text-white">
              UBCEA is not responsible for loss or theft
            </span>
          </li>

          <li>
            <span className="font-bold text-white">
              Everyone must sign the Lounge User Agreement
            </span>
            , even if they are not a student
          </li>

          <li>
            <span className="font-bold text-white">
              Slurs, loud yelling, and slamming the table are not allowed in the
              lounge.
            </span>{" "}
            Doing so can warrant a warning or removal from the space.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RulesAndEtiquette;
