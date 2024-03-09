
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name= 'Dhaka' special= 'Capital' ></District>
      <District name="Jamalpur" special="My Home Town"></District>
    </div>
  );
}


const LoadPost = () =>{

  const [posts, setPosts] = useState([])

  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return(
    <div>
      <h2>Post: {posts.length}</h2>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

const postStyle = {
  backgroundColor: 'lightgray',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px',

}

const Post = (props)=>{
  return(
    <div style={postStyle}>
      <h3>Title: {props.title} </h3>
      <p>Body: {props.body}</p>
    </div>
  )
}


const districtStyle = {
  backgroundColor: 'aqua',
  margin: '20px',
  padding: '15px',
  borderRadius: '20px'
}


function District(props){
  const [power, setPower] = useState(1)


  const boostPower = () => {
    const newPower = power * 2
    setPower(newPower)
  }


  return(
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}




export default App;
