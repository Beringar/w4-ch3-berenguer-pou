const Key = ({ number, actionOnClick }) => {
  return (
    <li className="key" onClick={() => actionOnClick(number)}>
      {number}
    </li>
  );
};

export default Key;
