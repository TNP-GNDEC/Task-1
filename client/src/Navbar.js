import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'
export default class Navbar extends Component {
  
  state = { activeItem: 'posts' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu 
        color="teal"
        pointing>
          <Menu.Item
            as={NavLink}
            to='/'
            name='posts'
            active={activeItem === 'posts'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/add"
            name='add post'
            active={activeItem === 'add'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
