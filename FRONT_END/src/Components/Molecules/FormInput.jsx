const FormInput = ({ label, hint, id, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-bold tracking-wide text-gray-900">
          {label}
        </label>
        {hint && <span className="text-xs text-gray-500">{hint}</span>}
      </div>

      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600"
      />
    </div>
  );
};

export default FormInput;
