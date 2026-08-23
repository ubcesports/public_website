import Image from "next/image";
import Link, { LinkProps } from "next/link";

type GameDepartmentCardProps = {
  title: string;
  href: LinkProps["href"];
  imageSrc: string;
};

const GameDepartmentCard = ({
  title,
  href,
  imageSrc,
}: GameDepartmentCardProps) => {
  return (
    <Link
      href={href}
      className="
        relative block h-28 w-full overflow-hidden rounded
        shadow-[0_6px_10px_rgb(14_19_54/45%)]
        transition-[transform,box-shadow] duration-300 ease-out
        hover:z-20 hover:scale-[1.03]
        hover:shadow-[0_10px_20px_rgb(14_19_54/55%)]
        focus-visible:z-20 focus-visible:scale-[1.03]
        focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-teal
        motion-reduce:transition-none
        motion-reduce:hover:scale-100
        lg:h-30
      "
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(min-width: 1024px) 560px, calc(100vw - 3rem)"
        className="object-cover"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-bg-dark-blue/55" />

      <h3
        className="
          font-game
          absolute inset-0
          flex items-center justify-center
          px-4 text-center
          text-4xl uppercase text-white font-bold
        "
      >
        {title}
      </h3>
    </Link>
  );
};

export default GameDepartmentCard;
