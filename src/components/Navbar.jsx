import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/arquivos">
                <button>Arquivos</button>
            </Link>
        </nav>
    )
}