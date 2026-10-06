import Input from "./MiniComponents/input";

const LoginForm = () => {
  return (
    <>
      <Input
        props={{
          text: "EMAIL BISNIS",
          type: "email",
          id: "email",
          name: "email",
          placeholder: "nama@warunganda.com",
        }}
        className="w-full"
      />
      <Input
        props={{
          text: "KATASANDI",
          type: "password",
          id: "password",
          name: "password",
          placeholder: "********",
        }}
        className="w-full"
      />
    </>
  );
};

export default LoginForm;
