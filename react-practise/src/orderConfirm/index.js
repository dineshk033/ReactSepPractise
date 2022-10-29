import OrderItem from "./orderItem";
import "./index.css";
const ORDERLIST = [
  { title: "Chicken Briyani", price: "15.00", qty: 1 },
  { title: "Mutton Briyani", price: "25.00", qty: 1 },
  { title: "Kadai Briyani", price: "20.00", qty: 1 },
];

function Container() {
  return (
    <div className="OrderSummaryContainer ">
      <h2>Confirma Order</h2>
      <hr />
      <OrderItem {...ORDERLIST[0]} />
      <OrderItem {...ORDERLIST[1]} />
      <OrderItem {...ORDERLIST[2]} />
    </div>
  );
}

export default Container;
