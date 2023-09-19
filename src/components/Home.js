import BlogList from "./BlogList"
import useFetch from "./useFetchApi"
import "../css/Body.css"

function Home(){
    const {Blogs}=useFetch("http://localhost:4001/Blogs")
    return(
        <>
            <div className="home">
               {Blogs && <BlogList Blogs={Blogs} title="All Blogs" />}
            </div>
        </>
    )
}

export default Home