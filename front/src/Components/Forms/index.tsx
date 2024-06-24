import { Card } from "@material-tailwind/react";
import { forwardRef } from "react";

export const Forms = forwardRef<HTMLFormElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return (
      <Card className="w-full" color="transparent" shadow={false} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <form className="w-full max-h-96 overflow-auto" ref={ref}>
          <div className="mb-1 flex flex-col gap-6">
            {children}
          </div>
        </form>
      </Card>
    );
  }
);

export const FormsSelect = ({ name, title, options, value, onChangeAction }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{title}</label>
      <select
        name={name}
        value={value}
        onChange={onChangeAction}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Selecione {title.toLowerCase()}</option>
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  );
};