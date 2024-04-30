import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditPhoto() {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [photo,setPhoto] = useState("")
    const {id} = useParams()
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

    useEffect(() => {
        getPhoto()
        .then((data) => {
            setTitle(data.title)
            setDescription(data.description)
            setPhoto(data.photo)
        })
    },[id])

    async function onEdit(e) {
        e.preventDefault()

        fetch(`http://localhost:5000/photos/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,description,photo})
        })
        .then(() => navigate('/'))
    }

    return (
        <div>

            <form method="post" onSubmit={onEdit}>

            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle( e.target.value)} />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div>
                <label htmlFor="photo">Image Link:</label>
                <input type="text" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            </div>

            <div>
                <button>Edit Photo</button>
            </div>

            </form>
        </div>
    )
}