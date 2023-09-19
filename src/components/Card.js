import '../css/Card.css'

function Card(){
    return(
        <>
           
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL600_SR600,400_.jpg" /> 
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}

export default Card