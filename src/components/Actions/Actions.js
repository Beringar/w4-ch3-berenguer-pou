import Action from "../Action/Action";

const Actions = ({ actionOnClickCall, actionOnClickHang }) => {
  const telephoneNumber = "8798798";
  let isCalling = true;
  return (
    <>
      <div className="actions">
        <span className="number">667359961</span>
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
