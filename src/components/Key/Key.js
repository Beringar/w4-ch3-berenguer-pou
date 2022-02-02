const Key = ({ number, className, actionOnClick }) => {
  return (
    <li className={className} onClick={() => actionOnClick(number)}>
      {number}
    </li>
  );
};

export default Key;
