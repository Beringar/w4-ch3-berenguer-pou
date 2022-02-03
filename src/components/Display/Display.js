import { useContext } from "react";
import TelefonoContext from "../contexts/TelefonoContext";

const Display = ({ className }) => {
  const { telephoneNumber } = useContext(TelefonoContext);

  return <span className={className}>{telephoneNumber}</span>;
};

export default Display;
