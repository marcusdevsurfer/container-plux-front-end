import React from 'react'

export const Footer = () => {

    const footerText = {
        fontSize: '10px',
        fontStyle : 'cursive'
    }
    
    
    return (
        <div className='container-fluid bg-body-tertiary '>
            <div className='row align-items-center'>
                <div style={footerText} className='col p-2 '>
                    DEVELOPED by devcoast.
                </div>
            </div>
        </div>
    )
}
