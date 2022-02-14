import React from "react";
import "firebase/auth";
import firebase from "./firebase";
import { User } from "./interface";

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

  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
