export default function InputWithLabel({
  labelProps,
  inputProps,
  onChangeHandler,
}) {
  const { label, ...remLabelProps } = labelProps;
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-600" {...remLabelProps}>
        {label}
      </span>
      <input
        className="border w-64 px-2 py-1 text-base"
        {...inputProps}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}
