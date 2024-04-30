import { useEffect, useState } from "react"
import AllPhotosCard from "../AllPhotosCard/AllPhotosCard"

export default function AllPhotos() {

const [photos,setPhotos] = useState([])

async function getPhotos() {
    try {
        const response = await fetch('http://localhost:5000/photos',{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        const result = await response.json()
       // console.log(result)
        return result
    } catch (err) {
        throw err
    }
}

useEffect(() => {
    
    getPhotos()
    .then((data) => setPhotos(data))
},[])

    return (
        <div>
            {photos.length > 0 ? 
            photos.map((photo) => (
               <AllPhotosCard key={photo._id} title={photo.title} description={photo.description} photo={photo.photo} />
            ))
        : null}
        </div>
    )
}