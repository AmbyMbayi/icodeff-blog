import {useEffect, useState} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: "Title One", body:"Body of title one", author: "Amby", id: 1},
       {title: "title Two", body: "Body of title two", author: "Mbayi", id: 2},
       {title: "title Three", body: "Body of title three", author: "Amby", id: 3},
       {title: "title Four", body: "body of title four", author: "Achwal", id: 4}
   ])

   const [name, setName] = useState('wazii')
  
   const handleDelete =(id )=> {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
   }
   useEffect(()=>{
       console.log("use effect in action")
       console.log(name)
   }, [name])
    return (  
        <div className="home">
         
        <BlogList blogs ={blogs} title="List of Blogs" handleDelete ={handleDelete}  />
        <button onClick={() => setName('"Magic')}>Change Name</button>
        <p>{name}</p>
        
           
        </div>
    );
}
 
export default Home;