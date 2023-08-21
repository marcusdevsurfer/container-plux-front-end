import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ContainerInventory = () => {

    const [error, setError] = useState();
    const [data, setdata] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:8080/containers")
            .then(
                (res) => {
                    setdata(res.data)
                }
            )
            .catch(err => {
                setError(err.message);
                console.log(error)
            });
    }, [data])

    return (

        <div className='container'>

            <div className="my-3">
                <h1 className="text-center display-6 p-1">Inventario</h1>
            </div>


            <div className="text-center my-2">
                <button className="btn btn-success p-2">Agregar contenedor</button>
            </div>

            <div className="text-center my-2">
                <button className='btn btn-primary'>Activos</button>
                <button className="btn btn-outline-secondary p-1 m-1">Llenos</button>
                <button className="btn btn-outline-secondary p-1 m-1">Vacios</button>
            </div>

            <div className="my-4">
                <table className="table text-center table-sm table-success">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha ingreso</th>
                            <th>Hora de ingreso</th>
                            <th>Naviera</th>
                            <th>Tipo</th>
                            <th>Tamaño</th>
                            <th>Operador</th>
                            <th>Placas</th>
                            <th>Transportista</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((container) => (
                            <tr key={container.id} className="table-light">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
