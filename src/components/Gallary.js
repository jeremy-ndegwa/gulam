import "../css/Gallery.css"
import img1 from "../resources/images/img1.jfif"
import img2 from "../resources/images/img2.jfif"
import img3 from "../resources/images/img3.jfif"
import img4 from "../resources/images/img4.jfif"
import img5 from "../resources/images/img5.jfif"
import img6 from "../resources/images/img6.jfif"



function Gallery(){
    return(
        <>
            <div className="about">
                <h3>Gallery Page</h3>
                <div className="imgs">
                    <div className="img-row">
                        <img src={img1}></img>
                        <img src={img2}></img>
                        <img src={img3}></img>
                    </div>
                    <div className="img-row">
                        <img src={img4}></img>
                        <img src={img5}></img>
                        <img src={img6}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery