import React from 'react'
import { Nav } from 'react-bootstrap'

const Header = () => (
    <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/locations">Locations</Nav.Link>
      </Nav.Item>
    </Nav>
)

export default Header
