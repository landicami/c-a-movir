import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

import { Link, NavLink } from "react-router-dom";


const Navigation = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as ={Link} to="/">Find ze code! 🎬</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={NavLink} to="/">Home</Nav.Link>
							<Nav.Link as={NavLink} to="/genres">Genres</Nav.Link>

						</Nav>
					</Navbar.Collapse>
			</Container>
	  </Navbar>
	)
}

export default Navigation
