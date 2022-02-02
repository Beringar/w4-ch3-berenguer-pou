const Action = ({ text, className, actionOnClick }) => {
  return (
    <a href={text} className={className} actionOnClick={actionOnClick}>
      {text}
    </a>
  );
};

export default Action;
