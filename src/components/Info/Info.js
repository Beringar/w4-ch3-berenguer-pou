import { useContext } from "react";
import GentlemenContext from "../../contexts/GentlemenContext";

const Info = ({ className, message }) => {
  const { isCalling } = useContext(GentlemenContext);

  return <>{isCalling && <span className={className}>{message}</span>}</>;
};

export default Info;
