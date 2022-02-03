import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = ({ actionOnClickCall, actionOnClickHang }) => {
  const telephoneNumber = "8798798";
  let isCalling = true;
  return (
    <>
      <div className="actions">
        <Display className="number" />
        {telephoneNumber > 8 && (
          <Action
            text="Call"
            className={`call ${isCalling ? "active " : ""}`}
            actionOnClick={actionOnClickCall}
          />
        )}
        {telephoneNumber < 8 && (
          <Action
            text="Hang"
            className={`hang ${!isCalling ? "active " : ""}`}
            actionOnClick={actionOnClickHang}
          />
        )}
      </div>
    </>
  );
};

export default Actions;
