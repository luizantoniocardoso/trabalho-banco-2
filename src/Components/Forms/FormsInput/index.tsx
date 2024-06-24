export const FormsInput = ({ name, title, placeholder, type, value, onChangeAction }: any) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">{title}</label>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChangeAction}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    );
  };