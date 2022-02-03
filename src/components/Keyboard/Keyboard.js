import Key from "../Key/Key";

const Keyboard = ({ className, actionOnClick }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <ol className={className}>
        {numbers.map((key) => (
          <Key
            key={key}
            text={key}
            className="key"
            actionOnClick={actionOnClick}
          />
        ))}
        <Key
          key="delete"
          text="delete"
          className="key big"
          actionOnClick={() => console.log("esborrar!")}
        />
      </ol>
    </>
  );
};

export default Keyboard;
