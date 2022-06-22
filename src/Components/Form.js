import "./Form.css"
import memesData from "../memesData"
import React from "react"

export default function Form() {

        function getMemeImage() {
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            setMemeImage(memesArray[randomNumber].url)
        }

        const [memeImage, setMemeImage] = React.useState('')

    return(
        <form>
            <input 
            type="text"
            placeholder="Top text"
            ></input>
            <input 
            type="text"
            placeholder="Bottom text"
            ></input>
            <button
            type="button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            <img src={memeImage} alt=""></img>
        </form>
        
    )
}
