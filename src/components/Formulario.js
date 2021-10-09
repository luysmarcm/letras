import React, { useState } from 'react';


const Formulario = ({setBuscarArtista}) => {

    const [busqueda, setbusqueda] = useState({
         artist:'',
         song:''
    })

    const {artist, song} = busqueda;

    const [error, seterror] = useState(false)

    const actualizarState =  e =>{
        setbusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }

    const buscarInformacion = e => {
        e.preventDefault();

        if (artist.trim() ==='' || song.trim() === ''){
            seterror(true);
            return;
        }

        seterror(false);

        setBuscarArtista(busqueda);




            
        
    }


    return ( 
        <div className="p-3 mb-2 bg-secondary text-white">
            {error ? <p className="alert alert-danger text-center p-2"> Todos los campos son obligatorios</p> : null}
        <div  className="container" >
        
            <div className="row">
                
                <form 
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                >
                    <fieldset>
                        <legend className="text-center" >Buscador Letras Canciones</legend>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="text-dark">Artista</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artist"
                                        placeholder="Nombre Artista"
                                        onChange={actualizarState}
                                        value={artist}
                                        
                                    />
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="text-dark">Canción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="song"
                                        placeholder="Nombre Canción"
                                        onChange={actualizarState}
                                        value={song}
                                      
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-light float-right"
                        >Buscar</button>
                    </fieldset>

                </form>
            </div>
        </div>
    </div>
 );
}
 
export default Formulario;