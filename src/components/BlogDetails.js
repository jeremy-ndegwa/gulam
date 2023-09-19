import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetchApi"
import { Button } from "react-bootstrap"

function BlogDetails(){
    //collecting a single blog
    const {id} = useParams()
    const {Blogs: blog} = useFetch(" http://localhost:4001/Blogs/" +id)

    return(
        <div className="details">
            <h4>Blog Details {id}</h4>
            {blog && (
                <article className="home">
                    <h2>{blog.title}</h2>
                    <p>Done by {blog.author}</p>
                    <div>{blog.body}</div>
                    <Button variant="danger" className="mt-3" type="submit">Delete</Button>
                </article>
            )}
        </div>
    )

}

export default BlogDetails