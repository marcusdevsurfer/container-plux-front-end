import React from 'react'
import { AddContainer } from './AddContainer'

export const ButtonsContainerInventory = () => {
    return (
        <div className='row'>
            <div className='col-sm-6'>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Añadir contenedor
                </button>

                <div>
                    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Formulario Contenedor</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <AddContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-end col-sm-6'>
                <button className='btn btn-primary'>Activos</button>
                <button className="btn btn-outline-secondary p-1 m-1">Llenos</button>
                <button className="btn btn-outline-secondary p-1 m-1">Vacios</button>
            </div>
        </div>
    )
}
