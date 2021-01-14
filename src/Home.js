import {useEffect, useState} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: "Title One", body:"Body of title one", author: "Amby", id: 1},
       {title: "title Two", body: "Body of title two", author: "Mbayi", id: 2},
       {title: "title Three", body: "Body of title three", author: "Amby", id: 3},
       {title: "title Four", body: "body of title four", author: "Achwal", id: 4}
   ])
  
   const handleDelete =(id )=> {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
   }
   useEffect(()=>{
       console.log("use effect in action")
       console.log(blogs)
   })
    return (  
        <div className="home">
         
        <BlogList blogs ={blogs} title="List of Blogs" handleDelete ={handleDelete}  />
        
           
        </div>
    );
}
 
export default Home;