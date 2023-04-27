import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect } from "react";

export const Protected = (
  props: PropsWithChildren & { mustBeAuth: boolean }
) => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (
      (props.mustBeAuth && !auth.isAuthenticated()) ||
      (!props.mustBeAuth && auth.isAuthenticated())
    ) {
      router.replace("/");
    }
  }, [props.mustBeAuth, auth, router]);

  return <>{props.children}</>;
};
