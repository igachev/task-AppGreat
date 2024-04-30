import { Link } from "react-router-dom";


export default function AllPhotosCard({
    id,
    title,
    description,
    photo
}) {


    return (
        <div className="all-photos-card">
            <h2>Title: {title}</h2>
            <h4>Description: {description}</h4>
            <div className="img-container">
                <img src={photo} alt="" />
            </div>
            <Link to={`/photos/${id}/details`}>Photo Details</Link>
        </div>
    )
}