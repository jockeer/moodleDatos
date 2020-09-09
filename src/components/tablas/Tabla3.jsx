
import React,{useState,useEffect,Fragment} from 'react'
import ReactHTMLTableToExcle from 'react-html-table-to-excel'
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
        <Fragment>
            <ReactHTMLTableToExcle id="botonExportarExcel" className="btn btn-success" table="tabla3" filename="tabla3" sheet="pagina 1" buttonText="Exportar a excel"/>
            <table className="table" id="tabla3">
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
        </Fragment>

            
     );
}
 
export default Tabla3;