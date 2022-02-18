import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import {
  AuthProvider,
  useCurrentUser,
  useCurrentUserLoading,
} from "../src/api/firebaseAuth";
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
  const currentUserLoading = useCurrentUserLoading();

  // React.useEffect(() => {
  //   if (!currentUser && !isSignUpPage && !currentUserLoading)
  //     router.push("/login");
  // }, [currentUser, isSignUpPage, router, currentUserLoading]);

  return null;
};

export default App;
