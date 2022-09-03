import React, { useState } from "react";
import Listado from './components/Listado';
import Cabecera from './components/Cabecera';

function App() {
  const [itemComprado, setItemComprado] = useState(0)

  const comprarItem = () => {
    setItemComprado(itemComprado + 1)
  }

  return (
    <div className="App">
      <Cabecera itemComprado={itemComprado} />
      <Listado comprarItem={comprarItem} />
    </div>
  )

}

export default App;
