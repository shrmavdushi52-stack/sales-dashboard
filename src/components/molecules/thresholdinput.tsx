type Props = { value: number; onChange: (v: number) => void };
export default function ThresholdInput({ value, onChange }: Props) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">Minimum sales</span>
      <input
        type="number" min={0} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-36 rounded-md border px-3 py-1.5 text-sm"
      />
    </label>
  );
}