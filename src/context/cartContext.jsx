import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const cartContext = createContext();

export function CartContextProvider( {children} ) {
  let [cart, setCart] = useState([]);

  // AGREGAR un item al Carrito
  function addItem(item , count) {
    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id); //Verdadero si existe el item dentro del carrito

    if (isInCart) {

        let newCart = [...cart]; //Creamos nuevo carrito con los items del anterior
        let index = cart.findIndex((itemInCart) => itemInCart.id === item.id); //Obtenemos el index del item que queremos agregar nuevamente al carrito

        if (newCart[index].stock >= (newCart[index].cantidad + count)){

            newCart[index].cantidad += count;

            Swal.fire({
                text: `Agregaste ${item.titulo} (Cant : ${count}) al carrito`,
                icon: 'success',
                background: '#fee801',
                color: '#27292b',
                iconColor: 'green',
                confirmButtonColor: '#27292b',
            })

            setCart([...newCart]);

        } else {
            Swal.fire({
                text: "No hay suficiente Stock",
                icon: 'error',
                background: '#fee801',
                color: '#27292b',
                iconColor: 'red',
                confirmButtonColor: '#27292b',
            })
        }
        
    } else {
        item.cantidad = count;

        Swal.fire({
            text: `Agregaste ${item.titulo} (Cant : ${count}) al carrito`,
            icon: 'success',
            background: '#fee801',
            color: '#27292b',
            iconColor: 'green',
            confirmButtonColor: '#27292b',
        })

        /* COPIAR CARRITO Y AGREGAR ITEM FORMA 1
        let newCart = [...cart]
        newCart.push(item);
        setCart(newCart) */

        /* COPIAR CARRITO Y AGREGAR ITEM FORMA 2 */
        setCart([...cart, item]);
    }
  }

  // REMOVER un item del Carrito
  function removeItem(producto) {

    if (cart.includes(producto)) {

      let newCart = cart.filter((item) => item.id !== producto.id);

      setCart([...newCart]);

      Swal.fire({
        text: `${producto.titulo} eliminado del carrito`,
        icon: 'success',
        background: '#fee801',
        color: '#27292b',
        iconColor: 'green',
        confirmButtonColor: '#27292b',
      })
      
    } else {
      Swal.fire({
        text: `${producto.titulo} no se encuentra en el carrito`,
        icon: 'error',
        background: '#fee801',
        color: '#27292b',
        iconColor: 'red',
        confirmButtonColor: '#27292b',
      })
    }
  }

  // Vaciar Carrito
  function clearCart() {
    setCart([]);
  }

  // Precio total de los productos del Carrito
  function getTotalPriceInCart() {
    let total = cart.reduce((acum, item) => acum + (item.precio * item.cantidad) , 0);
    return total;
  }

  // Cantidad total de productos en el Carrito
  function getCantItems() {
    let cantidad = cart.reduce((acum, item) => acum + item.cantidad , 0);
    return cantidad;
  }

  const value = { cart, addItem, removeItem, clearCart, getCantItems, getTotalPriceInCart};

  return (
    <cartContext.Provider value={value}>{children}</cartContext.Provider>
  );
}