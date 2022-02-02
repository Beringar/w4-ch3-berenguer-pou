import Key from "../Key/Key";

const Keyboard = ({ className, keys, actionOnClick }) => {
  return (
    <>
      <div className="keyboard-container"></div>
      <ol className={className}>
        {keys.map((key) => (
          <Key key={key.id} number={key} actionOnClick={actionOnClick} />
        ))}
      </ol>
    </>
  );
};

export default Keyboard;
