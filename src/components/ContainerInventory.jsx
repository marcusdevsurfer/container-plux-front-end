import React from 'react'
import { useState, useEffect } from 'react';
import { request } from '../util/axios_helper';
import { FULL_PARAM_VALUE, EMPTY_PARAM_VALUE } from '../util/container-inventory-util';
import { AddContainer } from './AddContainer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './MyDocument';

export const ContainerInventory = () => {


    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState();
    const [containersData, setContainersData] = useState([]);
    const [displayAllContainersTable, setDisplayAllContainersTable] = useState(false)
    const [displayEmptyContainersTable, setDisplayEmptyContainersTable] = useState(true)
    const [displayFullContainersTable, setDisplayFullContainersTable] = useState(true)
    const [date, setDate] = useState('')

    let fullContainers = containersData.filter(function (el) {
        return el.status === FULL_PARAM_VALUE  
    }
    );


    let emptyContainers = containersData.filter(function (el) {
        return el.status === EMPTY_PARAM_VALUE
    }
    );


    //METODO PARA SETEAR LISTA DE CONTENEDORES
    useEffect(() => {
        if(!isLoaded){
        request(
            'GET',
            '/containers',
            {},
            {}
        ).then((response) => {
            setContainersData(response.data)
            setIsLoaded(true)
        }).catch(error => {
            setError(error)
            console.log(error)
            setIsLoaded(false)
        })
    }

    }, [])

    const findContainerById = (id) => containersData.find(container => container.id === id)


    const showAllContainers = () => {
        if (displayAllContainersTable === false) {
            setDisplayEmptyContainersTable(true)
            setDisplayFullContainersTable(true)
        }
        if (displayAllContainersTable === true) {
            setDisplayEmptyContainersTable(true)
            setDisplayFullContainersTable(true)
            setDisplayAllContainersTable(false)
        }
    }

    const showFullContainers = () => {
        if (displayFullContainersTable === true) {
            setDisplayAllContainersTable(true)
            setDisplayEmptyContainersTable(true)
            setDisplayFullContainersTable(false)
        }

    }

    const showEmptyContainers = () => {
        if (displayEmptyContainersTable === true) {
            setDisplayAllContainersTable(true)
            setDisplayFullContainersTable(true)
            setDisplayEmptyContainersTable(false)
        }
    }



    return (

        <div className='container my-3'>

            {/* PANEL DE BOTON DE ACCIONES*/}
            <div className='row text-center'>

                <div className='col-sm-12 col-md-12'>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Añadir contenedor
                    </button>

                    <div>
                        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Formulario Contenedor</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <AddContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-8 col-sm-12 my-2 d-flex'>
                    <button className='btn btn-outline-secondary p-1 m-1' onClick={showAllContainers}>Activos</button>
                    <button className='btn btn-outline-secondary p-1 m-1' onClick={showFullContainers}>Llenos</button>
                    <button className='btn btn-outline-secondary p-1 m-1' onClick={showEmptyContainers}>Vacios</button>
                </div>

                <div className='col-sm-12 d-flex col-md-4 my-2'>
                    <input className='form-control' id='findByDate' type="date" />
                    <button className='btn btn-primary'>Buscar</button>
                </div>


            </div>
            {/* FIN PANEL DE BOTON DE ACCIONES*/}


            {/* ---- TABLAS -------*/}

            {/* TABLA TODOS LOS CONTENEDORES */}
            <div hidden={displayAllContainersTable}>
                {containersData.length <= 0
                    ?
                    <h4 className='text-center display-6'>No hay registros!</h4>
                    :
                    <div className="table-responsive my-4">
                        <h3 className='text-center'>Todos los contenedores</h3>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha ingreso</th>
                                    <th>Hora de ingreso</th>
                                    <th>Naviera</th>
                                    <th>Estado</th>
                                    <th>Tipo</th>
                                    <th>Tamaño</th>
                                    <th>Operador</th>
                                    <th>Placas</th>
                                    <th>Transportista</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {containersData.map((container) => (
                                    <tr key={container.id}>
                                        <td>
                                            {container.id}
                                        </td>
                                        <td>
                                            {container.entryDay}
                                        </td>
                                        <td>
                                            {container.entryHour}
                                        </td>
                                        <td>
                                            {container.shippingCompany}
                                        </td>
                                        <td>
                                            {container.status === "empty" ? "Vacio" : container.status === 'full' ? 'Lleno' : undefined}
                                        </td>
                                        <td>
                                            {container.type}
                                        </td>
                                        <td>
                                            {container.size}
                                        </td>
                                        <td>
                                            {container.operator}
                                        </td>
                                        <td>
                                            {container.licencePlate}
                                        </td>
                                        <td>
                                            {container.carrier}
                                        </td>
                                        <td>
                                            <button className='btn btn-secondary btn-sm m-1'>Editar</button>
                                            <PDFDownloadLink document={<MyDocument data={findContainerById(container.id)} />} fileName=''>
                                                {({ blob, url, loading, error }) =>
                                                    loading ? 'Loading...' : <button className='btn btn-primary btn-sm'>Descargar EIR</button>
                                                }
                                            </PDFDownloadLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            {/* FIN TABLA TODOS LOS CONTENEDORES */}



            {/* TABLA TODOS LOS CONTENEDORES LLENOS */}
            <div hidden={displayFullContainersTable}>
                {fullContainers.length <= 0
                    ?
                    <h4 className='text-center display-6'>No hay registros de contenedores llenos</h4>
                    :
                    <div className="table-responsive my-4">
                        <h3 className='text-center'>Contenedores llenos</h3>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha ingreso</th>
                                    <th>Hora de ingreso</th>
                                    <th>Naviera</th>
                                    <th>Estado</th>
                                    <th>Tipo</th>
                                    <th>Tamaño</th>
                                    <th>Operador</th>
                                    <th>Placas</th>
                                    <th>Transportista</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fullContainers.map((container) => (
                                    <tr key={container.id}>
                                        <td>
                                            {container.id}
                                        </td>
                                        <td>
                                            {container.entryDay}
                                        </td>
                                        <td>
                                            {container.entryHour}
                                        </td>
                                        <td>
                                            {container.shippingCompany}
                                        </td>
                                        <td>
                                            {container.status === "empty" ? "Vacio" : container.status === 'full' ? 'Lleno' : undefined}
                                        </td>
                                        <td>
                                            {container.type}
                                        </td>
                                        <td>
                                            {container.size}
                                        </td>
                                        <td>
                                            {container.operator}
                                        </td>
                                        <td>
                                            {container.licencePlate}
                                        </td>
                                        <td>
                                            {container.carrier}
                                        </td>
                                        <td>
                                            <button className='btn btn-secondary btn-sm m-1'>Editar</button>
                                            <button className='btn btn-danger btn-sm m-1'>Ver EIR</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            {/* FIN TABLA TODOS LOS CONTENEDORES LLENOS */}


            {/* TABLA TODOS LOS CONTENEDORES VACIOS */}
            <div className='text-center' hidden={displayEmptyContainersTable}>
                {emptyContainers.length <= 0
                    ?
                    <h4 className='display-6'>No hay registros de contenedores vacios</h4>
                    :
                    <div className="table-responsive my-4">
                        <h3 className='text-center'>Contenedores vacios</h3>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha ingreso</th>
                                    <th>Hora de ingreso</th>
                                    <th>Naviera</th>
                                    <th>Estado</th>
                                    <th>Tipo</th>
                                    <th>Tamaño</th>
                                    <th>Operador</th>
                                    <th>Placas</th>
                                    <th>Transportista</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emptyContainers.map((container) => (
                                    <tr key={container.id}>
                                        <td>
                                            {container.id}
                                        </td>
                                        <td>
                                            {container.entryDay}
                                        </td>
                                        <td>
                                            {container.entryHour}
                                        </td>
                                        <td>
                                            {container.shippingCompany}
                                        </td>
                                        <td>
                                            {container.status === "empty" ? "Vacio" : container.status === 'full' ? 'Lleno' : undefined}
                                        </td>
                                        <td>
                                            {container.type}
                                        </td>
                                        <td>
                                            {container.size}
                                        </td>
                                        <td>
                                            {container.operator}
                                        </td>
                                        <td>
                                            {container.licencePlate}
                                        </td>
                                        <td>
                                            {container.carrier}
                                        </td>
                                        <td>
                                            <button className='btn btn-secondary btn-sm m-1'>Editar</button>
                                            <button className='btn btn-danger btn-sm m-1'>Ver EIR</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            {/* FIN TABLA TODOS LOS CONTENEDORES VACIOS */}



        </div>
    )
}
