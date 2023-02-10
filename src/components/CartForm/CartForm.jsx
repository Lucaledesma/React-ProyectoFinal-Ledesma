import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import './cartform.css';

function CartForm( {onSubmit} ) {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    function onInputChange(evt) {
        const field = evt.target.name;
        const value = evt.target.value;

        const newState = { ...userData };

        newState[field] = value;

        setUserData(newState);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(userData);
    }

    function clearData() {
        setUserData({
            name: '',
            email: '',
            phone: '', 
        });
    }

    // let arrayUserData = Object.keys(userData);

    return (
        <form className="cartForm" onSubmit={handleSubmit}>
            <h3>Finalizar Orden de Compra</h3>

            {/*{
                arrayUserData.map( field => <InputForm label={field} name={field} value={userData[field]}onInputChange={onInputChange}/>)
            }*/}

            <InputForm label="Nombre" name="name" value={userData.name} onInputChange={onInputChange}/>
            <InputForm label="Email" name="email" value={userData.email} onInputChange={onInputChange}/>
            <InputForm label="Telefono" name="phone" value={userData.phone} onInputChange={onInputChange}/>

            <div className="cartForm-btn">
                <button>Crear orden</button>
                <button onClick={clearData}>Limpiar datos</button>
            </div>
        </form>
    );
}

export default CartForm;