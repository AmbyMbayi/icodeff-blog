
import './App.css';

function App() {
  const title = "Hello Welcome to React icodeff blsog"
  const likes = 50
  const first_name = "Ambrose"
  const person = {name: "Kev", age: "40"}
  const link_site = "www.google.com"
  const branch = "iss2"
  
  const last_name ="Amby"
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{likes} times</p>
      <p>Hi {person.name} </p>
      <p>You are {person.age} years</p>
      <p>{first_name}</p>
      <a href={link_site}>Google site</a>
      <p>{branch}</p>
      
      <p>{last_name}</p>
    </div>
  );
}

export default App;
