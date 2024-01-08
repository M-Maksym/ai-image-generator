import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.jpg'
import { useDispatch } from "react-redux"
import { addToHistory } from '../../features/slices/historySlice'

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }

    const ImageGenerator = async () => {
        if(inputRef.current.value===""){
            return 0;
        }
        setLoading(true);
            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization:
                        "Bearer YOUR_TOKEN",
                        "User-Agent":"Chrome",
                    },
                    body: JSON.stringify({
                        prompt:`${inputRef.current.value}`,
                        n:1,
                        size:"512x512",
                    }),                   
                }
            );
            let data = await response.json();
            let data_array = data.data;
            console.log(data_array);
            setImage_url(data_array[0].url); 
            setLoading(false);
            dispatch(addToHistory({
                url: data_array[0].url,
                text: `${inputRef.current.value}`,
                date: getDate(),
            }));
            console.log(`prompt: ${inputRef.current.value}`);
    } 

  return (
    <div className='ai-image-generator'>
        <div className="header">
            Ai Image <span>generator</span>
        </div>
        <div className="img-loading">
            <div className="image">
                <img src={image_url==="/" ? default_image : image_url} alt="result" />
            </div>
            <div className="loading">
                <div className={loading?'loading-bar-full':'loading-bar'}></div>
                <div className={loading?"loading-text":"display-none"}>Loading...</div>
            </div>
        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' name='place for prompt'/>
            <div className="generate-btn" onClick={()=>{ImageGenerator()}}>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator