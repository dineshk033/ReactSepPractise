import "./orderItem.css";

const MARGINBOTTOM = {
  marginBottom: "0.5rem",
};

const FONTWEIGHT = {
  fontWeight: 400,
};

const OrderItem = (props) => {
  return (
    <div style={MARGINBOTTOM} className="flex justifyContentbtn">
      <div className="flex ">
        <h4 style={FONTWEIGHT} className="pr-2 m-0">
          {props.title}
        </h4>
        <h4 style={{ color: "tomato" }} className="m-0">
          x{props.qty}
        </h4>
      </div>
      <h4 style={FONTWEIGHT} className="m-0">
        ${props.price}
      </h4>
    </div>
  );
};

OrderItem.defaultProps = {
  title: "Chicken Briyani",
  qty: 1,
  price: "15.00",
};

export default OrderItem;

//Named export
// export {OrderItem};
