import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      {/* <Conuter></Conuter> */}

      <ExtranalUsers></ExtranalUsers>
    </div>
  );
}


function ExtranalUsers() {
  const [users, setUsers] = useState([]);
  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))


  }, [])
  return(
    <div>
      <h2>Extranal Users</h2>
      <p>{users.length}</p>

      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}


const User = (props) =>{
  return(
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Conuter(){
  const [count, setCount] = useState(0);
  // console.log(n)

  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);


  // const IncreaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}



export default App;







// function App() {
//   const products = [
//     {name:'laptop', price: 45000},
//     {name:'iPhone', price: 95000},
//     {name:'Watch', price: 3000},
//     {name:'HeadPhone', price: 1000},
//   ]
//   return (
//     <div className="App">

//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }


//       {/* <Product name="Laptop" price="45000"></Product>
//       <Product name="iPhone" price="95000"></Product>
//       <Product name="HeadPhone" price="1500"></Product> */}
//     </div>
//   );
// }


// function Product(props){
//   return (
//     <div className='product'>
//       <h2>Name: {props.name}</h2>
//       <p>Price: {props.price}tk</p>
//     </div>
//   )
// }