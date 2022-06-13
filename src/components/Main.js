import React, { useEffect, useState } from "react";


export default function Main() {

  const[color,setColor] = useState("text-white");

  const colorChange = (event) => {
    setColor(event.target.value)
  }

  const [allMeme,setAllMeme] = useState({});

    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        img: "https://i.imgflip.com/30b1gx.jpg",
    })

    const handelText = (event) => {
       const {name,value} = event.target;
       setMeme((previous) => {
         return ({
           ...previous,
           [name]: value,
         })
       })
    }

    useEffect(() =>{
      fetch("https://api.imgflip.com/get_memes").then((resolve) =>resolve.json())
      .then((data) => setAllMeme(data))
      console.log(allMeme);
    },[])

    

    

    const handelClick = () => {
      // console.log(allMeme);
        const memeArr = allMeme.data.memes;
        const random = Math.floor(Math.random() * memeArr.length);
        const url = memeArr[random].url;
        setMeme((pre) => {
            return ({
                ...pre,
                img: url,
            })
        });
    }
   
  return (
    <>
      <div className="w-full my-5 p-9">
      <input type="text" name="topText" value={meme.topText} onChange={handelText} placeholder="Top Text" className="mr-[20%] mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />
      <input type="text" name="bottomText" value={meme.bottomText} onChange={handelText} placeholder="Bottom Text" className=" mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />
          <button onClick={handelClick} className="w-full my-5 bg-[#672280] p-3">Get a new meme image</button>
          <div className="flex gap-6 p-4 justify-center">
            <p>Text Color:</p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="text-white" onClick={colorChange}>White</button>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="text-black" onClick={colorChange}>Black</button>
          </div>
          <div className="relative">
          <img className="w-full h-[50vh]" src={meme.img} alt="img"/>
          <h3 className={`absolute top-3 left-[30%] right-[30%] text-2xl font-extrabold text-center ${color}`}>{meme.topText}</h3>
          <h3 className={`absolute bottom-3 left-[30%] right-[30%] text-2xl text-red font-extrabold text-center ${color}`}>{meme.bottomText}</h3>
          </div>
      </div>
    </>
  );
}
