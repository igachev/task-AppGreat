import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div>
            <h1>Welcome to Photo App</h1>
            <ul>
                <li><Link to={`/`}>All Photos</Link></li>
                <li><Link to={`/photos/create`}>Create Photo</Link></li>
            </ul>
        </div>
    )
}