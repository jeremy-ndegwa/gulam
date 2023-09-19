import "../css/bloglist.css"
import { Link } from "react-router-dom/cjs/react-router-dom"

function BlogList({Blogs,title}){

    return(
        <>
            <h2>{title}</h2>
                {Blogs.map((blogs)=>{
                    return(
                        <>
                            <div className="preview" key={blogs.id}>
                                <Link to={`/blogdetails/${blogs.id}`}>
                                    <h2>{blogs.title}</h2>
                                    <p>{blogs.author}</p>
                                </Link>
                            </div>
                        </>
                    )
                })}
        </>
    )
}

export default BlogList

