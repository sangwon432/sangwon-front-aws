import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
    try{
      const {data, status} = await axios.get('http://localhost:8000/api/blog/all')
      console.log(data)
      setBlogs(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBlogs()
  }, []);



  return (
      <div>
        <br/>
        {blogs?.map(blog => (
            <div>
              <h1>{blog.title}</h1>
              <h2>{blog.category}</h2>
              <h2>{blog.desc}</h2>
              <h2>{blog.author}</h2>
              <h2>{blog.image}</h2>
            </div>
        ))}
      </div>
  )
}

export default App;
