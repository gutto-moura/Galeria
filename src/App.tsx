import { useState, useEffect } from "react"
import { isTemplateExpression } from "typescript";
import * as C from "./App.style";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photos";
import { PhotoItem } from "./components/PhotoItem";

const App = () => {
  // TEMPO : 01:00
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false)
    };
    getPhotos();
  }, [])
  return(
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>
        {loading && 
        <C.ScreenWarning>
          <div className="emoji">🔄</div>
          <div>Carregando... </div>
        </C.ScreenWarning>
        }
        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map( photos => {
              return(
                <PhotoItem  key={photos.name} url={photos.url} name={photos.name /* OU photos={photos} */} />
              )
            })}
          </C.PhotoList>
        }
        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">🤳🏻</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  )
}
export default App;