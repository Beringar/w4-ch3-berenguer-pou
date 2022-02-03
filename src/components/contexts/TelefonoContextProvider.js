import { useState } from "react";
import TelefonoContext from "./TelefonoContext";

const TelefonoContextProvider = ({ children }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [telephoneNumber, setTelephoneNumber] = useState("555");

  const startCall = () => {
    setIsCalling(true);
  };

  const stopCall = () => {
    setIsCalling(false);
  };

  return (
    <TelefonoContext.Provider
      value={{
        isCalling,
        startCall,
        stopCall,
        telephoneNumber,
        setTelephoneNumber,
      }}
    >
      {children}
    </TelefonoContext.Provider>
  );
};

export default TelefonoContextProvider;
