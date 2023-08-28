import React from 'react'

export const Login = () => {
    const loginComponentStyle = {
        'height': '85vh'
    }

    const logoStyle = {
        'width': '12%',
        'height': '12%'

    }
    return (
        <div className='text-center align-center d-flex flex-column justify-content-center' style={loginComponentStyle}>

            <div className='container '>

                <div className='col-md-12'>


                    <div className='mb-3'>
                        <img className='mx-auto' src="container.png" alt="Logo" style={logoStyle} />
                    </div>

                    <h2>Iniciar sesion</h2>

                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className='input-group mb-3'>
                                <span class="input-group-text" id="username">@</span>
                                <input className='form-control' type="text" name="username" id="username" placeholder='Usuario' />
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className='input-group mb-3'>
                                <span class="input-group-text" id="password">@</span>
                                <input className='form-control' type="password" name="password" id="password" placeholder='Contraseña' />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='btn btn-primary'>Entrar</button>
                    </div>

                </div>



            </div>

        </div>
    )
}
