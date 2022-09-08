import { useState, useEffect } from "react"
import * as C from "./App.style";
import * as Photos from "./services/photos";


const App = () => {
  // TEMPO : 45:15
  const [loading, setLoading] = useState(false);

  return(
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>
          
      </C.Area>
    </C.Container>
  )
}
export default App;