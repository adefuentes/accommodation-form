import { type Image as ImageType } from "../features/accommodation/redux/types.ts";

export const Image = ({
  onDelete,
  image,
}: {
  image: ImageType;
  onDelete?: (id: string) => void;
}) => {
  return (
    <div className="size-32 group overflow-hidden rounded-lg relative">
      <img
        className="size-32 object-cover"
        src={image.src}
        alt={`Photo-${image.id + 1}`}
      />
      {onDelete ? (
        <button
          onClick={() => onDelete(image.id)}
          className="hidden cursor-pointer group-hover:flex items-center justify-center size-32 absolute top-0 left-0 bg-neutral-800/40 p-1 z-10"
        >
          <p className="text-4xl text-white font-light">ⓧ</p>
        </button>
      ) : null}
    </div>
  );
};
