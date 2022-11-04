import { ItemContainer } from "./styled";

const YourTodo = (props) => {
  const { list } = props; //destructing

  const handlecomplete = () => {};

  const iterate = (arr) => {
    //return js element to show list
    return arr.map((obj) => (
      <ItemContainer justify="space-around" key={obj.title}>
        <p>{obj.title}</p>
        <div>
          <button onClick={() => props.handleComplete(obj)}>y</button>
          <button>N</button>
        </div>
      </ItemContainer>
    ));
  };

  return (
    <div>
      <h4>Your todo's</h4>
      {
        iterate(list) //calling function
      }
    </div>
  );
};

export default YourTodo;
