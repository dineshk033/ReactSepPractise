import React from "react";

class ListGroup extends React.Component {
  state = {
    expense: [
      {
        title: "Snack",
        catg: "Food",
        price: "110",
        tranMode: "D",
      },
      {
        title: "Bike Fuel",
        catg: "Fuel",
        price: "500",
        tranMode: "D",
      },
      {
        title: "Bike surchrage Fuel",
        catg: "Fuel",
        price: "10",
        tranMode: "C",
      },
    ],
  };

  handleRemove = (args) => {
    const FILTER = this.state.expense.filter((el) => el.title != args.title);

    this.setState({ expense: FILTER });
    // console.log(FILTER);
  };

  render() {
    return (
      <div>
        {this.state.expense.map((record, index) => (
          <Item
            item={record}
            remove={this.handleRemove}
            key={index.toString()}
          />
        ))}
      </div>
    );
  }
}

const Item = (props) => {
  const ITEM = props.item;
  return (
    <div
      style={{ borderBottom: "1px solid black" }}
      className="flex justifyContentbtn"
    >
      <div>
        <h4>{ITEM.title}</h4>
        <h6 className={ITEM.tranMode === "C" ? "success" : "fail"}>
          Catg: {ITEM.catg}
        </h6>
      </div>
      <div>
        <h3 style={{ color: ITEM.tranMode === "C" ? "green" : "red" }}>
          ${ITEM.price}
        </h3>
        <button onClick={() => props.remove(props.item)}>x</button>
      </div>
    </div>
  );
};

Item.defaultProps = {
  item: {
    title: "Bike Fuel",
    catg: "Fuel",
    price: "10",
    tranMode: "C",
  },
};

export default ListGroup;
