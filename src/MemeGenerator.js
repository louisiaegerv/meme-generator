import React, {useState, useEffect} from "react"

import "./MemeGenerator.css"

let MemeGenerator = () => {
    
    let [topText, setTopText] = useState("")
    let [bottomText, setBottomText] = useState("2020")
    let [memeImg, setMemeImg] = useState("https://i.imgflip.com/wxica.jpg")
    let [memeArr, setMemeArr] = useState([])

    function getRandomMeme() {
        console.log(memeArr)
        let randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)]
        console.log(randomMeme)
        setMemeImg(randomMeme.url)
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) 
            .then(d => {
                let {memes} = d.data
                setMemeArr(memes)
            })
    },[])

    return (
        <div className="meme-container">
            <div className="meme-form">
                <input placeholder="Top Text" type="text" name="topText" onChange={(e) => setTopText(e.target.value)} />
                <input placeholder="Bottom Text" type="text" name="bottomText" onChange={(e) => setBottomText(e.target.value)} />
                <button onClick={getRandomMeme}>Next Image</button>
            </div>
            <div className="meme-result">
                <img src={memeImg} alt=""/>
                <p className="topText" >{topText}</p>
                <p className="bottomText" >{bottomText}</p>
            </div>
        </div>
    )
}

export default MemeGenerator