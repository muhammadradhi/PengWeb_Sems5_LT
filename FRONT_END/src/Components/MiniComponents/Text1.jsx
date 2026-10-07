const Text1 = ({ props, className }) => {
  return (
    <p className={`text-xs font-medium tracking-[0.55px] ${className}`}>
      {props.text}
    </p>
  );
};

export default Text1;
