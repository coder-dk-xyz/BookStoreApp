// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const stored = localStorage.getItem("Users");

      // Check that stored is not null, not the string "undefined", and valid JSON
      if (stored && stored !== "undefined") {
        return JSON.parse(stored);
      }

      return undefined;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return undefined;
    }
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

