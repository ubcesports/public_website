import Image from "next/image";
import { EventImage } from "../../events/eventData";

const GROUP_SIZE = 6;

type EventGalleryProps = {
  images: EventImage[];
};

// On large screens photos are laid out in groups of 6: the first photo of each group is
// shown at 2x2, alternating left and right sides so the grid zigzags. A group needs at
// least 3 photos to fill the space around its featured photo. Multiples of 3 fill evenly.
const EventGallery = ({ images }: EventGalleryProps) => {
  return (
    <ul className="grid w-full grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {images.map((image, index) => {
        const group = Math.floor(index / GROUP_SIZE);
        const groupLength = Math.min(GROUP_SIZE, images.length - group * GROUP_SIZE);
        const isFeatured = index % GROUP_SIZE === 0 && groupLength >= 3;
        const featuredOnRight = group % 2 === 1;

        return (
          <li
            key={image.src}
            className={`
              group relative aspect-3/2 overflow-hidden rounded-[5px]
              shadow-[0_7px_8px_rgb(0_0_0/60%)]
              ${isFeatured ? "lg:col-span-2 lg:row-span-2 lg:aspect-auto" : ""}
              ${isFeatured && featuredOnRight ? "lg:col-start-2" : ""}
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                isFeatured
                  ? "(min-width: 1024px) 768px, (min-width: 640px) 50vw, 100vw"
                  : "(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
              }
              className="
                object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-105
                motion-reduce:transition-none motion-reduce:group-hover:scale-100
              "
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-bg-dark-blue/25 transition-colors duration-300 group-hover:bg-transparent"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default EventGallery;
