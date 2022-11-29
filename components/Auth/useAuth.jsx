import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";

export const useAuth = () => {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribeFromAuthStateChanged;
  }, []);
  return user;
};

export default useAuth;
