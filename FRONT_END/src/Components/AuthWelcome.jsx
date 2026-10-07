const AuthWelcome = ({ props }) => {
  return (
    <div className="flex flex-col items-start gap-1.5 mb-9">
      <h1 className="text-4xl font-bold">{props.h1}</h1>

      <p className="text-xl text-font-3">{props.content}</p>
    </div>
  );
};

export default AuthWelcome;
