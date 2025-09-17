import type { ChangeEvent } from "react";
import type { InputError } from "../features/accommodation/redux/types";

export const Input = ({
  label,
  value,
  errors,
  onChange,
  isRequired = false,
}: {
  label: string;
  value: string;
  isRequired?: boolean;
  errors?: InputError[];
  onChange?: (e: string) => void;
}) => {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange && e.target) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">
        {label} {isRequired ? <span className="text-red-500">*</span> : null}
      </p>
      <div className="flex p-2 rounded-lg border border-gray-300">
        <input
          type="text"
          className="w-full outline-none"
          defaultValue={value}
          onChange={_onChange}
          required={isRequired}
        />
      </div>
      {errors && errors.length && !!value
        ? errors.map((error, index) =>
            error.found ? (
              <p key={index} className="text-red-500 text-xs">
                {`- ${error.message}`}
              </p>
            ) : null,
          )
        : null}
    </div>
  );
};
