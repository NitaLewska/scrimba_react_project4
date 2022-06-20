import "./Header.css"
import Logo from "../Images/TrollFace.png"

export default function Header() {
    return (
        <header>
            <img src={Logo} alt=""></img>
            <h1>Meme Generator</h1>
            <h2>React Course - Project 3</h2>
        </header> 
    )

}