import React, { useState } from 'react'

export default function SearchBox() {

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue)
        
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue}&key=${path}`
        
        fetch(URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setvideos(data.items)
        })
    }

    const handleChange = (e) => {
        setsearchValue(e.target.value)
    }


    const [searchValue,setsearchValue] = useState()
    const [videos, setvideos] = useState()

   

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button type="submit">Search</button>

                <div className="class-videos">
                    {videos && videos.map(video => {    

                        const sourceurl = `https://www.youtube.com/embed/${video.id.videoId}`
                        console.log(1)
                        return <iframe width="560" 
                        height="315" 
                        src= {sourceurl}
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    })}
                </div>
             

            </form>
        </div>  
    )
}