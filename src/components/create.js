import "../css/Create.css"
import { useState, useFetch } from "react";
import Header from "./header";
import { Form,Button } from "react-bootstrap";
import axios from "axios";


function Create(){
    const [Blogs, setBlogs] = useState({
        title : " ",
        author : " ",
        body : " "
    })

    function addToBlogList(e){
        const {name, value} = e.target;
        setBlogs((prev)=>{
            return{...prev,[name]:value}
        })
    }
    
    const  handleSubmit = (e)=>{
        e.preventDefault()

        //using axios to post our data
        axios.post("http://localhost:4001/Blogs",Blogs)
        .then(res=>{
            alert("New Data Addded");
        })
        .catch(err=>console.log(err))

     
    }

    return(
        <>
            <Header />
            <div className="main-body">
                <div className="left">
                    <h1>BLOGS</h1>
                    <input type="search" placeholder="Search"></input>
                    <ul>
                        <li>Profile</li>
                        <li>My Blogs</li>
                        <li>Revenue</li>
                        <li>Notifications</li>
                        <li>Likes</li>
                        <li>Analytics</li>
                    </ul>
                    <hr></hr>
                    <ul>
                        <li>Logout</li>
                        <li>Dark Mode</li>
                    </ul>

                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mt-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title"  onChange={addToBlogList} required placeholder="please enter Title"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author"  onChange={addToBlogList} required placeholder="please enter author"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Body</Form.Label>
                        <Form.Control  as="textarea" name="body" rows={3}  onChange={addToBlogList} required placeholder="please enter body"></Form.Control>
                    </Form.Group>
                    <Button variant="primary" className="mt-3" type="submit">Done</Button>
                </Form>
                <div className="right">
                    <h1>Icons</h1>
                    <p>{Blogs.Title}</p>
                    <p>{Blogs.Author}</p>
                    <p>{Blogs.Body}</p>
                </div>
            </div>
        </>
    )
}

export default Create