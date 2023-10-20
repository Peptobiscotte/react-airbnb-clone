import airBnbLogo from "../assets/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airBnbLogo} className="nav--logo" />
        </nav>
    )
}