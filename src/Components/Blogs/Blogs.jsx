import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddBookmark , handleMarkASread}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blog.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleAddBookmark={handleAddBookmark}
                    handleMarkASread={handleMarkASread}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;