import React from 'react'

export default function Balance(props) {
  // const transactions = props.transactions;
  // const amounts = transactions.map( t => t.amount);
  // const total = amounts.reduce( (sum,amount) => (sum+=amount), 0);

  // let sign = total<0 ? '-':'+';
  // if (total===0) {
  //   sign = ''
  // }

  let point =0;

  return (
    <div className="container mt-5 text-center">
      <h4>Point is</h4>
      <h1 id="balance">{Math.abs(point)}</h1>
    </div>

    // <div className="container mt-5 text-center">
    //   <h4>Your Balance</h4>
    //   <h1 id="balance">+฿6550</h1>
    // </div>
  )
}
