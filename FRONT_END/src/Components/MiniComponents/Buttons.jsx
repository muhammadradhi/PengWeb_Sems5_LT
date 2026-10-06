const Button = ({ props }) => {
  const buttonStyle = {
    primary: "bg-primary text-white border border-primary",
    secondary: "bg-transparent text-black border border-black",
    login: "bg-primary text-white border border-primary w-full",
  };

  return (
    <button
      type="button"
      className={`px-8 py-3.5 rounded-sm text-sm font-medium ${buttonStyle[props.type]}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
