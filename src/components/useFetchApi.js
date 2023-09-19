import { useEffect, useState } from "react"
import axios from "axios";

function useFetch(url){
    const [Blogs, setBlogs] = useState(null)

    useEffect(()=>{
        axios.get(url)
        .then(res=>{setBlogs(res.data)})
        .catch(err=>{console.log(err)})

    // get single blog
    // const getBlog=()=>{
    //     axios.get("http://localhost:4001/Blogs:id")
    //     .then(res=>{setBlogs(res.data)})
    //     .catch(err=>{console.log(err)})
    // }

    //   post single blog
    //   const createBlog=()=>{
    //     axios.post("http://localhost:4001/Blogs:id")
    //     .then(res=>{setBlogs(res.data)})
    //     .catch(err=>{console.log(err)})
    // }

    //   update single blog
    //   const updateBlog=()=>{
    //     axios.patch("http://localhost:4001/Blogs:id")
    //     .then(res=>{setBlogs(res.data)})
    //     .catch(err=>{console.log(err)})
    // }

    //   get single blog
    //   const deleteBlog=()=>{
    //     axios.delete("http://localhost:4001/Blogs:id")
    //     .then(res=>{setBlogs(res.data)})
    //     .catch(err=>{console.log(err)})
    // }

}, [url]);
    return {Blogs}
}

export default useFetch;