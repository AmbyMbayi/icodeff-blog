import {useState} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: "Title One", body:"Body of title one", author: "Amby", id: 1},
       {title: "title Two", body: "Body of title two", author: "Mbayi", id: 2},
       {title: "title Three", body: "Body of title three", author: "Amby", id: 3},
       {title: "title Four", body: "body of title four", author: "Achwal", id: 4}
   ])
    return (  
        <div className="home">
         
        <BlogList blogs ={blogs} title="List of Blogs" />
        <BlogList blogs = {blogs.filter((blog) => blog.author=== "Amby") } title="Amby's Posts" />
           
        </div>
    );
}
 
export default Home;