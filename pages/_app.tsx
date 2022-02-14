import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import { AuthProvider, useCurrentUser } from "../src/api/firebaseAuth";
import React from "react";
import "../styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <AppInit />
    </AuthProvider>
  );
};

const AppInit: React.FC = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const isSignUpPage = router.asPath.startsWith("/sign_up");

  React.useEffect(() => {
    if (!currentUser && !isSignUpPage) router.push("/login");
  }, []);

  return null;
};

export default App;
