import { IInputDinamicWidthProps } from "@/interfaces/ICUiLib";

export function CInputDinamicWidth({
  type,
  placeholder,
  name,
  register,
  error,
  rules,
}: IInputDinamicWidthProps) {
  return (
    <>
      <input
        className="w-full border-2 border-gray-300 rounded-md h-11 px-2"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <span className="text-red-500 my-1">{error}</span>}
    </>
  );
}
