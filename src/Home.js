import {useState} from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([
        {author: "Amby Mbayi",title: "Title One", body: "body of title one...", id: 1},
    ])
    
    return (  
        <div className="home">
          
     {blogs.map((blog) =>(
         <div className="blog-preview" key={blog.id}>
             <h2>{blog.title}</h2>
             <p>Written by {blog.author}</p>
         </div>
     ))}
           
        </div>
    );
}
 
export default Home;