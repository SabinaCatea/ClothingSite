import { createContext, useReducer, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase";

//where we keep the actual values
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhanded type: ${type} in UseReducer`);
  }
};

const INITIAL_VALUE = {
  currentUser: null,
};
//the container which wrap the other components which need access
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_VALUE);

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };

  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser };

  useEffect(() => {
    const unsubscribed = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribed;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
