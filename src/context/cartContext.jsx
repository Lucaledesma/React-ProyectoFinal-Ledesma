import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider( {children} ) {
  let [cart, setCart] = useState([]);

  function addItem(item , count) {
    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id); //Verdadero si existe el item dentro del carrito

    if (isInCart) {

        let newCart = [...cart]; //Creamos nuevo carrito con los items del anterior
        let index = cart.findIndex((itemInCart) => itemInCart.id === item.id); //Obtenemos el index del item que queremos agregar nuevamente al carrito

        if (newCart[index].stock >= (newCart[index].cantidad + count)){
            newCart[index].cantidad += count;
            alert(`Agregaste ${count} ${item.titulo} al carrito`);
            setCart([...newCart]);
        } else {
            alert("No hay suficiente Stock");
        }
        
    } else {
        item.cantidad = count;
        alert(`Agregaste ${count} ${item.titulo} al carrito`);
        /* COPIAR CARRITO Y AGREGAR ITEM FORMA 1
        let newCart = [...cart]
        newCart.push(item);
        setCart(newCart) */
        /* COPIAR CARRITO Y AGREGAR ITEM FORMA 2 */
        setCart([...cart, item]);
    }
  }
/*
  function removeItem(idToDel) {
    setCart(cart.pop());
  }

  function clearCart() {
    // Vaciar el carrito 
  }

  function getTotalItems() {
    let total = 0;
    cart.forEach((item) => (total += 1));
    return total;
  }

  function getTotalPriceInCart() {
    return 999;
  }*/

  const value = { cart, addItem}//, removeItem, getTotalItems, getTotalPriceInCart };

  return (
    <cartContext.Provider value={value}>{children}</cartContext.Provider>
  );
}