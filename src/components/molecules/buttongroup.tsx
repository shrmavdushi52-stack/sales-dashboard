import Button from "../atoms/buttom";

type Props<T extends string | number> = {
  label: string; options: T[]; value: T; onChange: (v: T) => void;
};
export default function ButtonGroup<T extends string | number>({ label, options, value, onChange }: Props<T>) {
  return (
    <div>
      <p className="mb-1 text-sm font-medium">{label}</p>
      <div className="flex gap-2">
        {options.map((o) => (
          <Button key={o} active={o === value} onClick={() => onChange(o)}>{o}</Button>
        ))}
      </div>
    </div>
  );
}