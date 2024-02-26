import Earth from "../assets/earth.svg"

function Navbar (props) {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={Earth} alt="Earth logo"></img>
            <h3 className="navbar--title">my travel journal</h3>
        </nav>
    )
}

export default Navbar