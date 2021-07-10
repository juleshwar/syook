export default function InputWithLabel({ labelProps, inputProps }) {
    const { label, ...remLabelProps } = labelProps
    return (
        <div className="flex flex-col">
            <span className="text-sm" {...remLabelProps}>{label}</span>
            <input className="border w-64" {...inputProps} />
        </div>
    )
}