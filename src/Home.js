import {useState} from 'react'

const Home = () => {

    const [name, setName] = useState('Amby')
    const [age, setAge] = useState(45)

    const clickMe =() => {
        setName("kamano")
        setAge(10)
       
    }
    
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
           <button onClick={clickMe}>Click Me</button>
           
        </div>
    );
}
 
export default Home;