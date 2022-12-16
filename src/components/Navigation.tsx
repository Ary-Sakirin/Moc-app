import Link from "next/link";
import { Navbar } from "reactstrap";

type Props = {
    home: String;
    about: String;
    contact: String;
};

export function Navigation({ about, contact, home }: Props) {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/">{home}</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">{about}</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">{contact}</a></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>

    );
}