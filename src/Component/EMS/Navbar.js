// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {

//     const myNav = useNavigate()
//     const myLogout = (e) => {
//         localStorage.removeItem("EMSdata")
//         myNav("/")
//     }
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <a className="navbar-brand" href="#">W3School</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-automx-3">
//                         <li className="nav-item active">
//                             Home
//                         </li>
//                         <li className='mx-3'>
//                             Fashion
//                         </li>
//                         <li className=''>
//                             Mobile
//                         </li>
//                         <li className='mx-3'>
//                             Games
//                         </li>

//                     </ul>
//                     <button onClick={myLogout}>Logout</button>
//                 </div>
//             </nav>
//         </div>
//     );
// }

// export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function ColorSchemesExample() {
    const myNav = useNavigate()
    const myLogout = (e) => {
        localStorage.removeItem("EMSdata")
        myNav("/")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Features</Nav.Link>
                        <Nav.Link >Pricing</Nav.Link>
                        <Nav.Link onClick={myLogout}>Logout</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>


        </div>
    );
}

export default ColorSchemesExample;