import React from 'react'

export const Footer = () => {
    
    const footerStyle = {
        'fontSize' : '14px',
        'height': '7.5vh',
        'margin' : '0',
        'padding' : '0',
        'background' : '#0F0E0E'
    }
    return (
        <div style={footerStyle} className='d-flex align-items-end justify-content-start'>
            <p className='m-1 text-white'>Developed by : DevCoast</p>
        </div>
    )
}
