const Action = ({ text, className, actionOnClick }) => {
  return (
    <a href={text} className={className} onClick={actionOnClick}>
      {text}
    </a>
  );
};

export default Action;
