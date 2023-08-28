import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const AddContainer = () => {

    const URI = 'http://localhost:8080/containers'

    const [entryDay, setEntryDay] = useState('')
    const [entryHour, setEntryHour] = useState('')
    const [shippingCompany, setShippingCompany] = useState('')
    const [status, setStatus] = useState('full')
    const [type, setType] = useState('')
    const [size, setSize] = useState('')
    const [operator, setOperator] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [carrier, setCarrier] = useState('')

    function handleStatusChange(e) {
        setStatus(e.target.value)
    }

    const container = {
        'entryDay': entryDay,
        'entryHour': entryHour,
        'outDay': null,
        'status': status,
        'type': type,
        'size': size,
        'shippingCompany': shippingCompany,
        'operator': operator,
        'licencePlate': licensePlate,
        'carrier': carrier
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(URI,container)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setEntryDay('')
        setEntryHour('')
        setStatus('')
        setType('')
        setSize('')
        setShippingCompany('')
        setOperator('')
        setLicensePlate('')
        setCarrier('')
    }


    return (

        <div className='container text-center'>

            <form onSubmit={handleSubmit}>

                <div className="mb-3 row">
                    <label htmlFor="entryDay" className="col-sm-4 col-form-label">Fecha de ingreso</label>
                    <div className="col-sm-8">
                        <input value={entryDay} type="date" className="form-control" id="entryDay" onChange={e => setEntryDay(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="entryHour" className="col-sm-4 col-form-label">Hora de ingreso</label>
                    <div className="col-sm-8">
                        <input value={entryHour} type="time" className="form-control" id="entryHour" onChange={e => { setEntryHour(e.target.value) }} required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="shippingCompany" className="col-sm-4 col-form-label">Naviera</label>
                    <div className="col-sm-8">
                        <input value={shippingCompany} type="text" className="form-control" id="shippingCompany" onChange={e => setShippingCompany(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="status" className="col-sm-4 col-form-label">Estado</label>
                    <div className='col-sm-8'>
                        <select
                            defaultValue={status}
                            className="form-select col-sm-8"
                            onChange={handleStatusChange}>
                            <option value={'full'}>Lleno</option>
                            <option value={'empty'}>Vacio</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="type" className="col-sm-4 col-form-label">Tipo</label>
                    <div className="col-sm-8">
                        <input value={type} type="text" className="form-control" id="type" onChange={e => setType(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="size" className="col-sm-4 col-form-label">Tamaño</label>
                    <div className="col-sm-8">
                        <input value={size} type="text" className="form-control" id="size" onChange={e => setSize(e.target.value)} required />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="operator" className="col-sm-4 col-form-label">Operador</label>
                    <div className="col-sm-8">
                        <input value={operator} type="text" className="form-control" id="operator" onChange={e => setOperator(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="licensePlate" className="col-sm-4 col-form-label">Placas</label>
                    <div className="col-sm-8">
                        <input value={licensePlate} type="text" className="form-control" id="licensePlate" onChange={e => setLicensePlate(e.target.value)} required />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor="carrier" className="col-sm-4 col-form-label">Transportista</label>
                    <div className="col-sm-8">
                        <input value={carrier} type="text" className="form-control" id="carrier" onChange={e => setCarrier(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3">
                    <button type='submit' className='btn btn-success'>Enviar</button>
                </div>

            </form>

        </div>


    )
}
