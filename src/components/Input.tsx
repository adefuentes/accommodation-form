import { useState, type ChangeEvent } from "react";

export const Input = ({
  label,
  value,
  multiline = false,
  isValid = true,
  errorLabel,
  onChange,
  isRequired = false,
}: {
  label: string;
  value: string;
  isRequired?: boolean;
  isValid?: boolean;
  multiline?: boolean;
  errorLabel?: string;
  onChange?: (e: string) => void;
}) => {
  const [size, setSize] = useState<number>(0);

  const _onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target) {
      setSize(e.target.value.length);
      if (onChange) {
        onChange(e.target.value);
      }
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">
        {label} {isRequired ? <span className="text-red-500">*</span> : null}
      </p>
      <div
        className={`flex flex-col p-2 rounded-lg border ${isValid ? "border-neutral-300" : "border-red-500"}`}
      >
        {!multiline ? (
          <input
            type="text"
            className="w-full outline-none"
            defaultValue={value}
            onChange={_onChange}
            required={isRequired}
          />
        ) : (
          <>
            <textarea
              className="w-full outline-none resize-none"
              defaultValue={value}
              onChange={_onChange}
              required={isRequired}
              rows={4}
            ></textarea>
            <p className="w-full text-xs text-right text-neutral-500">{`${size} of 2048`}</p>
          </>
        )}
      </div>
      {!isValid && errorLabel && (
        <p className="text-red-500 text-sm">{errorLabel}</p>
      )}
    </div>
  );
};
