import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function PhotoDetails() {

const [photo,setPhoto] = useState({})
let {id} = useParams()
const navigate = useNavigate()

async function getPhoto() {
    try {
        const response = await fetch(`http://localhost:5000/photos/${id}`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        const result = await response.json()
        console.log(result)
        return result
    } catch (err) {
        throw err
    }
}

function goToPreviousPage() {
    navigate(-1)
}

async function deletePhoto(e) {
    e.preventDefault()
    let isConfirmed = confirm('Are you sure you want to delete this photo?')
    if(isConfirmed) {
        fetch(`http://localhost:5000/photos/${id}`, {method: 'DELETE'})
        .then(() => navigate('/'))
    }
}

useEffect(() => {
    getPhoto()
    .then((data) => setPhoto(data))
},[id])

    return (
        <div>
            <h1>Title: {photo.title}</h1>
            <h3>Description: {photo.description}</h3>
            <div>
                <img src={photo.photo} alt="" style={ {width: '400px'} } />
            </div>
            <button onClick={goToPreviousPage}>Back</button>
            <button onClick={deletePhoto}>Delete</button>
        </div>
    )
}