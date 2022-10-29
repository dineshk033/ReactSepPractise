export const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>{props.userName}</li>
        <li>{props.age}</li>
      </ul>
      <Avatar name="Chcikcen" />
      <Avatar name="Mutton" />
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
