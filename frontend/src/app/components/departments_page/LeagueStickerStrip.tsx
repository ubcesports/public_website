import Image from "next/image";

export default function LeagueStickerStrip() {
  return (
    <section
      aria-label="League of Legends community"
      className="flex w-full flex-col overflow-hidden bg-linear-to-b from-bg-dark-blue to-bg-dark-blue/0 px-4 py-10 sm:px-8 lg:h-[548px] lg:px-14 lg:py-[71px]"
    >
      <div className="flex w-full gap-3 sm:gap-6 lg:gap-[38px]">
        {["left", "center", "right"].map((position) => (
          <div
            key={position}
            aria-hidden="true"
            className="relative flex aspect-[513.33/400] max-h-[400px] min-w-0 flex-1 items-center justify-center overflow-hidden"
          >
            <div className="relative aspect-square h-full max-w-full">
              <Image
                src="/department_pages/ubceaBANG.png"
                alt=""
                fill
                sizes="400px"
                className="-translate-x-[10.7%] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}