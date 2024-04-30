import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreatePhoto() {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [photo,setPhoto] = useState("")
    const navigate = useNavigate()
    const errorsObj = {title: '',description: '', photo: ''}
    const [errors,setErrors] = useState(errorsObj)

    async function onSubmit(e) {
        e.preventDefault()

        let error = false;
        const errorObj = {...errorsObj}

        if(title === '') {
            error = true;
            errorObj.title = 'Title is required'
        }

        if(description === '') {
            error = true;
            errorObj.description = 'Description is required'
        }

        if(photo === '') {
            error = true;
            errorObj.photo = 'Photo is required'
        }

        setErrors(errorObj)

        if(error) {
            return
        }

        fetch('http://localhost:5000/photos',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,description,photo})
        })
        .then(() => navigate('/'))
    }

    return (
        <div>

            <form method="post" onSubmit={onSubmit}>

            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle( e.target.value)} />
            </div>
            {errors.title && <div>{errors.title}</div>}

            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            {errors.description && <div>{errors.description}</div>}

            <div>
                <label htmlFor="photo">Image Link:</label>
                <input type="text" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            </div>
            {errors.photo && <div>{errors.photo}</div>}

            <div>
                <button>Create Photo</button>
            </div>

            </form>
        </div>
    )
}