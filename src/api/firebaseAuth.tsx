import React from "react";
import "firebase/auth";
import firebase from "./firebase";
import { User } from "../interface";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext(null);

export const logout = async (): Promise<void> => {
  return await firebase.auth().signOut();
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<User>(null);

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (!user) return null;
      setCurrentUser({ id: user.uid, email: user.email, uid: user.uid });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useCurrentUser = () => {
  return React.useContext(AuthContext).currentUser;
};
