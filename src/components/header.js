import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar bg="white" expand="lg">
    <Navbar.Brand href="#home" className="mx-5 px-5">
      <img
        src="https://www.cendekiabaznas.sch.id/wp-content/uploads/2017/12/Logo-SCB_Hitam.png"
        alt=""
        height="70px"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home" className="px-3">
          Beranda
        </Nav.Link>
        <NavDropdown
          title="Tentang Kami"
          id="basic-nav-dropdown"
          className="px-3"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Informasi" id="basic-nav-dropdown" className="px-3">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home" className="px-3">
          Kegiatan
        </Nav.Link>
        <Nav.Link href="#home" className="px-3">
          PPDB
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
