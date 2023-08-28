import React from 'react'

export const Navbar = () => {
  const navbarStyle = {
    'height' : '7.5vh',
    'margin' : '0',
    'padding' : '0',
    'background' : '#0F0E0E',
    'color' : 'white'

  }
  return (
    <nav style={navbarStyle} className="navbar">
        <div className="container-fluid">
          <a href='/' className="navbar-brand text-white">
            Container Plux
          </a>
        </div>
      </nav>
  )
}
