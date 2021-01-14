import {useState} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: "Title One", body:"Body of title one", author: "Amby", id: 1},
       {title: "title Two", body: "Body of title two", author: "Mbayi", id: 2},
       {title: "title Three", body: "Body of title three", author: "Ben", id: 3},
       {title: "title Four", body: "body of title four", author: "Achwal", id: 4}
   ])
    return (  
        <div className="home">
         
        <BlogList blogs ={blogs} title="List of Blogs" />
           
        </div>
    );
}
 
export default Home;