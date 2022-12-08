import React, { useState } from "react";
import { useAuth } from "../../utils/hook/useAuth";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

function LoginPage(props: IProps) {
  const { setIsLogin } = props;
  const auth = useAuth();
  const [userEmail, setUserEmail] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // cancel event onSubmit cua form
    console.log("submited", userEmail, userPassword);
    // call API auth LOGIN
    // .then (data.json())
    // .then(setIsLogin(true); localStorage.setItem('token' , res.token))
    // .catch

    if (userEmail === "admin" && userPassword === "admin") {
      setIsLogin(true);
    } else {
      console.log(0);
    }
  };
  const login = () => {
    if (userEmail && userPassword) {
      auth.signIn(userEmail, userPassword, () => {});
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userEmail ?? ""}
        onChange={(event) => setUserEmail(event?.target.value)}
      />
      <input
        type="password"
        value={userPassword ?? ""}
        onChange={(event) => setUserPassword(event?.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default LoginPage;
