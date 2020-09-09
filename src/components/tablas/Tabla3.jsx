
import React,{useState,useEffect} from 'react'

const Tabla3 = () => {
    
    const[datos, guardarDatos] = useState([])

    useEffect(() => {
        const traerDatos = async() =>{
            const API=await fetch('http://localhost:4000/api/traerGruposMateria');
            const respuesta = await API.json()
            guardarDatos(respuesta)
        }
        traerDatos()
    }, [])
    
    return ( 
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre de la Materia</th>
                    <th scope="col">Grupo</th>
                </tr>
                        
            </thead>
            <tbody>
                {datos.map(dato => {
                    return  <tr key={dato.id}>               
                                <td>{dato.id}</td>
                                <td>{dato.fullname}</td>
                                <td>{dato.name}</td>                          
                            </tr>
                })}
                
            </tbody>
        </table>

            
     );
}
 
export default Tabla3;