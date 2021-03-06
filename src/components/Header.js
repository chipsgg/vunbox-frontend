import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heading, Navbar } from 'react-bulma-components'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  toggleMenu = () => {
    this.setState(state => {
      return {
        open: !state.open,
      }
    })
  }

  render() {
    const { open } = this.state
    return (
      <Navbar fixed="top" active={open}>
        <Navbar.Brand>
          <Link className="navbar-item" to="/">
            <Heading>
              vUnbox<small>.com</small>
            </Heading>
          </Link>

          <Navbar.Burger active={open} onClick={this.toggleMenu} />
        </Navbar.Brand>

        <Navbar.Menu active={open}>
          <Navbar.Container position="end">
            <Link className="navbar-item" to="/snapshots">
              Daily Snapshots
            </Link>
            <Link className="navbar-item" to="/leaderboards">
              Leaderboards
            </Link>
            <Link className="navbar-item" to="/documentation">
              API Documentation
            </Link>
          </Navbar.Container>

          {/* <Navbar.Container position="end">
          <Navbar.Item>
            <strong>{`Started: ${new Date(
              1551362112986
            ).toDateString()}`}</strong>
          </Navbar.Item>
        </Navbar.Container> */}
        </Navbar.Menu>
      </Navbar>
    )
  }
}

export default Header
