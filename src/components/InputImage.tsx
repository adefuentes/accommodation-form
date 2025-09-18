import type { ChangeEvent } from "react";
import { blobToString } from "../utils.ts";

export const InputImage = ({
  onChange,
  id,
}: {
  onChange?: (src: string) => void;
  id: string;
}) => {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        blobToString(file).then((src) => {
          onChange(src);
        });
      }
    }
  };

  return (
    <div className="cursor-pointer">
      <input
        type="file"
        className="hidden"
        id={id}
        accept="image/*"
        onChange={_onChange}
      />
      <label
        htmlFor={id}
        className="size-32 border-1 border-neutral-300 flex items-center justify-center rounded-lg cursor-pointer"
      >
        <p className="flex flex-col text-sm text-center -mt-2">
          <span className="text-4xl font-thin">+</span>
          Add photo
        </p>
      </label>
    </div>
  );
};
