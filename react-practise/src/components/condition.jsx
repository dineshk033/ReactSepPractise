const ConditionComponent = ({ label, list, isReaded }) => {
  const iterate = (arg) => {
    return arg.map((el) => <div key={el}>{el}</div>);
  };
  return (
    <div>
      <div>{label === "record" && <h4>title is present</h4>}</div>
      <div>
        {list.length > 0 ? (
          iterate(list)
        ) : (
          <div>
            multiline
            {isReaded ? <h4>readed</h4> : <div>no record</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConditionComponent;

ConditionComponent.defaultProps = {
  label: "record",
  list: [],
  isReaded: true,
};
