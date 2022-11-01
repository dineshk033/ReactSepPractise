const LIST = ["Mutton", "CHicken", "Prawn", "Fish"];
const Iterate = () => {
  return (
    <div className="container">
      {LIST.map((value) => (
        <Title name={value} key={value} />
      ))}
    </div>
  );
};

const Title = (props) => {
  return <h4>{props.name}</h4>;
};

export default Iterate;
