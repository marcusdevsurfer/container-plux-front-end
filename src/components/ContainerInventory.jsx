import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonsContainerInventory } from './ButtonsContainerInventory';
import { TitleContainerInventory } from './TitleContainerInventory';

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

                <TitleContainerInventory/>
                <ButtonsContainerInventory />

                {data.length <= 0
                    ?
                    <h3 className='text-center display-'>No hay registros!</h3>
                    :
                    <div className="my-4">
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
                                {data.map((container) => (
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
                                            {container.status === "empty" ? "Vacio" : "Lleno"}
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
                                            <button className='btn btn-secondary btn-sm mx-1'>Editar</button>
                                            <button className='btn btn-danger btn-sm mx-1'>Ver EIR</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }

            </div>
    )
}
