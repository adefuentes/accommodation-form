export const Selector = <T extends string | undefined>({
  label,
  value,
  options,
  isRequired = false,
  onChange,
}: {
  label?: string;
  value: T;
  options: { label: string; value: T }[];
  isRequired?: boolean;
  onChange?: (value: T) => void;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">
        {label} {isRequired ? <span className="text-red-500">*</span> : null}
      </p>
      <div className="flex px-2 rounded-lg border border-neutral-300">
        <select
          onChange={(e) => onChange?.(e.target.value as T)}
          required={isRequired}
          className="w-full h-full py-3 outline-none cursor-pointer"
          defaultValue={value}
        >
          {options.map((option) => (
            <option key={option.value ?? 0} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
