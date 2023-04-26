import { AuthContext } from "@/contexts/auth-context";
import { LoginForm } from "@/features/login/form";
import { FormEvent, useContext, useEffect, useState } from "react";

export type notificationColorsType = {
  [index: string]: string;
  error: string;
  warning: string;
  success: string;
};

export const notificationColors: notificationColorsType = {
  error: "bg-[#8C1017]",
  warning: "bg-[#DD8A06]",
  success: "bg-[#4465A1]",
};

const Login = () => {
  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  const auth = useContext(AuthContext);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const response = await fetch(
      "https://nnd-backend.up.railway.app/auth/login",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    if (response.status !== 200) {
      setNotification({ type: "error", message: "Invalid credentials" });
    } else {
      setNotification({
        type: "success",
        message: "You have logged in successfully",
      });
      const data = await response.json();
      auth?.setAuthState(data.token);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <LoginForm handleSubmit={handleFormSubmit}></LoginForm>
      {notification.message && (
        <p
          className={`${
            notificationColors[notification.type]
          } mt-5 p-2 rounded text-white font-bold text-lg text-center`}
        >
          {notification.message}
        </p>
      )}
    </section>
  );
};

export default Login;
