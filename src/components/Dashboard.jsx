import React from 'react'

export const Dashboard = () => {
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-md-2 col-sm-12 my-1'>
                    <div className='mx-1'>
                        <button className='btn btn-primary'>Agregar transportista</button>
                    </div>
                </div>
                <div className='col-md-10 d-flex justify-content-center col-sm-12 my-1'>
                    <div className='card mx-1'>
                        <div className='card-body'>
                            <div>
                                Contenedores
                            </div>
                            <div>
                                #
                            </div>
                        </div>
                    </div>

                    <div className='card mx-1'>
                        <div className='card-body'>
                            <div>
                                Transportistas
                            </div>
                            <div>
                                #
                            </div>
                        </div>
                    </div>

                    <div className='card mx-1'>
                        <div className='card-body'>
                            <div>
                                Gastos
                            </div>
                            <div>
                                #
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
