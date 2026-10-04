type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean };
export default function Button({ active, className = "", ...rest }: Props) {
  return (
    <button
      className={`px-3 py-1.5 rounded-md border text-sm ${
        active ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
      } ${className}`}
      {...rest}
    />
  );
}