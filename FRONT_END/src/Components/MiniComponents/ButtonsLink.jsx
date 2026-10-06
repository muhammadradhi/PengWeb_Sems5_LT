import { Link } from "react-router-dom";

const Button = ({ props }) => {
  const buttonStyle = {
    primary: "bg-primary text-white border border-primary",
    secondary: "bg-transparent text-black border border-black",
    login: "bg-primary text-white border border-primary w-full",
  };

  return (
    <Link
      to={props.to}
      className={`px-8 py-3.5 rounded-sm text-sm font-medium ${buttonStyle[props.type]}`}
    >
      {props.text}
    </Link>
  );
};

export default Button;
