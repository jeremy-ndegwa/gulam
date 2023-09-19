import "../css/Header.css"


function Header(){
    return(
    <>  <nav>
            <div className="brand">
            <h1> <a href="/">BLOG POST</a></h1>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/create">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/gallery">Gallery</a>
                </li>
            </ul>
        </nav>
    </>
    )
}
export default Header;
