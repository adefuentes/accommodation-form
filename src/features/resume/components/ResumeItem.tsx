export const ResumeItem = ({
  // label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: string;
}) => {
  return (
    <p className="text-sm w-full overflow-hidden text-ellipsis">
      {/*<span className="font-semibold">{`${label}: `}</span>*/}
      {link ? (
        <a className="text-sm text-blue-500 underline" href={link}>
          {value}
        </a>
      ) : (
        value
      )}
    </p>
  );
};
