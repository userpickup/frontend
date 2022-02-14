import { useRouter } from "next/router";
import React from "react";
import LoginForm from "../component/LoginForm";
import TopNavbar from "../component/TopNavbar";
import { useCurrentUser } from "../src/api/firebaseAuth";

const LoginPage: React.FC = () => {
  const user = useCurrentUser();
  const router = useRouter();
  if (user) router.push("/");

  return (
    <>
      <TopNavbar />
      <LoginForm />
    </>
  );
};

export default LoginPage;
