const Key = ({ text, className, actionOnClick }) => {
  return (
    <li>
      <button className={className} onClick={() => actionOnClick(text)}>
        {text}
      </button>
    </li>
  );
};

export default Key;
