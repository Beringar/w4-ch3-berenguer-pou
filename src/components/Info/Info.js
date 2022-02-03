import { useContext } from "react";
import TelefonoContext from "../contexts/TelefonoContext";

const Info = ({ className, message }) => {
  const { isCalling } = useContext(TelefonoContext);

  return <>{isCalling && <span className={className}>{message}</span>}</>;
};

export default Info;
