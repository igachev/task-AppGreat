
export default function AllPhotosCard({
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
        </div>
    )
}