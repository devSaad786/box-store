import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
  } from "react";
  
  type roleContextType = "user" | "rider" | "";
  
  const initialState: roleContextType = "";
  
  const RoleContext = createContext<{
    role: roleContextType,
    setRole: Dispatch<SetStateAction<roleContextType>>,
  }>({
    role: initialState,
    setRole: ()=>{}
  });
  
  export const useRoleContext = () => {
    const role = useContext(RoleContext);
    return role;
  };
  
  export default RoleContext;
  