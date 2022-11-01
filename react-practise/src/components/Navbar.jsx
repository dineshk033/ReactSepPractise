const LIST = ["Mutton", "CHicken", "Prawn", "Fish"];

export const Navbar = (props) => {
  const handleIteration = () => {
    return LIST.map((value) => <Avatar key={value} name={value} />);
  };
  return (
    <div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>{props.userName}</li>
        <li>{props.age}</li>
      </ul>
      {LIST.map((value) => (
        <Avatar key={value} name={value} />
      ))}
      {handleIteration()}
    </div>
  );
};

export const Avatar = (props) => {
  return <h5>{props.name}</h5>;
};
// export  Navbar;

Avatar.defaultProps = {
  name: "DefaultValeu",
};
