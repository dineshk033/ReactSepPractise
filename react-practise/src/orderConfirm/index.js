import OrderItem from "./orderItem";
import "./index.css";
import React from "react";
import Counter from "../components/counter";
import CounterTask from "../components/counterTask";
import { Navbar } from "../components/Navbar";
import Iterate from "../components/iterate";
const ORDERLIST = [
  { title: "Chicken Briyani", price: "15.00", qty: 1 },
  { title: "Mutton Briyani", price: "25.00", qty: 1 },
  { title: "Kadai Briyani", price: "20.00", qty: 1 },
];

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ORDERLIST: [
        { title: "Chicken Briyani", price: "12.00", qty: 1 },
        { title: "Mutton Briyani", price: "25.00", qty: 1 },
        { title: "Kadai Briyani", price: "20.00", qty: 1 },
      ],
    };
  }

  render() {
    return (
      <div className="OrderSummaryContainer ">
        <Counter incr={2} />
        <CounterTask />
        <Iterate />
        <h2>Confirma Order</h2>
        <hr />
        <OrderItem {...this.state.ORDERLIST[0]} />
        <OrderItem {...this.state.ORDERLIST[1]} />
        <OrderItem {...this.state.ORDERLIST[2]} />
      </div>
    );
  }
}

// class Container extends React.Component {
//   state = {
//     ORDERLIST: [
//       { title: "Chicken Briyani", price: "12.00", qty: 1 },
//       { title: "Mutton Briyani", price: "25.00", qty: 1 },
//       { title: "Kadai Briyani", price: "20.00", qty: 1 },
//     ],
//   };
//   render() {
//     return (
//       <div className="OrderSummaryContainer ">
//         <h2>Confirma Order</h2>
//         <hr />
//         <OrderItem {...this.state.ORDERLIST[0]} />
//         <OrderItem {...this.state.ORDERLIST[1]} />
//         <OrderItem {...this.state.ORDERLIST[2]} />
//       </div>
//     );
//   }
// }

export default Container;
