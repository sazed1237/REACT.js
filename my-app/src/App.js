import logo from './logo.svg';
import './App.css';

function App() {
  const names =['jamila khan', 'sulaiman khan','komola sundory', 'akram ali']
  return (
    <div className="App">
      {
        names.map(name => <li>name: {name}</li>)
      }

      {
        names.map(name => <Person name={name}></Person>)
      }


      {/* <Person name={names[0]} job="softwer enginner" ></Person>
      <Person name="sulaiman khan" job="web Developer"></Person>
      <Person name="akram ali"></Person>
      <Person></Person> */}
      <h5>New Component. SK</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  ) 
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name: Sulaiman khan</h3>
      <p>Job: Infuluancer</p>
    </div>
  )
}

export default App;
