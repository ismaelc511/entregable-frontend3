import React, { useState } from 'react';

export default function Item({ comprarItem, nombre, descripcion, stock, itemComprado }) {
  const [cantidad, setCantidad] = useState(stock)

  const venta = () => {
    setCantidad(cantidad - 1)
    comprarItem()
  }

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5> En stock : {cantidad > 0 ? cantidad : <span> agotado </span>}</h5>
      <button onClick={venta} disabled={cantidad <= 0 ? true : false}> {cantidad > 0 ? 'COMPRAR' : 'SIN STOCK'}</button>
    </div>
  )
}
