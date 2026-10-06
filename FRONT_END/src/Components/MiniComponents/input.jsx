const Input = ({ props, className }) => {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`}>
      <label
        htmlFor={props.id}
        className="font-semibold text-base mb-2.5 tracking-wider"
      >
        C1C8C1
        {props.text}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className="border border-[#C1C8C1] rounded-md p-2"
      />
    </div>
  );
};

export default Input;
