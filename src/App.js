import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';
import Artista from './components/Artista';

function App() {
  const [buscarArtista, setBuscarArtista] = useState({
    artist: null,
    song: null
  });
  const [letra, setletra] = useState('');
  const [informacion, setinfomacion] = useState('');

  useEffect(() => {
    //console.log(buscarArtista)
   // console.log(!buscarArtista.artist && !buscarArtista.song)
    if(!buscarArtista.artist && !buscarArtista.song)return;


    const consultaAPI = async () =>{
      const {artist, song} = buscarArtista;
      const apikey= '660a4395f992ff67786584e238f501'
      const url1=`https://api.vagalume.com.br/search.php?apikey=${apikey}aa&art=${artist}&mus=${song}`;
      const url2=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      

      const [letra, informacion] = await Promise.all([
        axios(url1),
        axios(url2)

      ]);
      console.log(letra)
      setletra(letra.data.mus[0].text)
      setinfomacion(informacion.data.artists[0])
       
    }
    consultaAPI();
  
  }, [buscarArtista])



  return (
    <div> 
      <Formulario setBuscarArtista= {setBuscarArtista} />


      <div className="container mt-5"> 
        <div className="row">
          <div className="col-md-6">

            <Artista informacion={informacion}/>
            

          </div>

          <div className="col-md-6">
                <Cancion
                letra={letra}
                /> 
                
                
          </div>


        </div>
      </div>
</div>
  );
}

export default App;





