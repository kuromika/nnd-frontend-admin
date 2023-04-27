import { Notification } from "@/components/notification";
import { AuthContext } from "@/contexts/auth-context";
import { LoginForm } from "@/features/login/form";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";

const Login = () => {
  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  const auth = useContext(AuthContext);
  const router = useRouter();

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
        message: "You have logged in successfully, redirecting...",
      });
      const data = await response.json();
      setTimeout(() => {
        auth.setAuthState(data.token);
      }, 1000);
    }
  };

  if (auth.isAuthenticated()) {
    router.replace("/");
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <LoginForm handleSubmit={handleFormSubmit}></LoginForm>
      {notification.message && (
        <Notification
          type={notification.type}
          message={notification.message}
        ></Notification>
      )}
    </section>
  );
};

export default Login;
