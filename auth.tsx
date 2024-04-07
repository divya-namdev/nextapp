import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import { firebaseClient } from "./firebaseClient";
import { onIdTokenChanged, updateCurrentUser } from "firebase/auth";
import { getToken } from "firebase/app-check";

const AuthContext = createContext<{ user:any | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }
    return  onIdTokenChanged(firebaseClient, async (user) => {
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", {path: '/login'});
        return;
      }

      console.log(`updating token...`);
      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, {path: '/login'});
    });
  }, []);

  // force refresh the token every 10 minutes
  // useEffect(() => {
  //   const handle = setInterval(async () => {
  //     console.log(`refreshing token...`);
  //     const user = currentUser(firebaseClient);
  //     if (user) await user.getIdToken(true);
  //   }, 10 * 60 * 1000);
  //   return () => clearInterval(handle);
    
  // }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};