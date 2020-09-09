
import React,{useState,useEffect,Fragment} from 'react'
import ReactHTMLTableToExcle from 'react-html-table-to-excel'
const Tabla2 = () => {
    
    const[datos, guardarDatos] = useState([])

    useEffect(() => {
        const traerDatos = async() =>{
            const API=await fetch('http://localhost:4000/api/modulosporcurso');
            const respuesta = await API.json()
            guardarDatos(respuesta)
        }
        traerDatos()
    }, [])
    
    return ( 
        <Fragment>

            <ReactHTMLTableToExcle id="botonExportarExcel" className="btn btn-success" table="tabla2" filename="tabla2" sheet="pagina 1" buttonText="Exportar a excel"/>
            <table className="table" id="tabla2">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre de la Materia</th>
                        <th scope="col">Tipo de Recurso o Actividad</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                            
                </thead>
                <tbody>
                    {datos.map(dato => {
                        return  <tr key={dato.id}>               
                                    <td>{dato.id}</td>
                                    <td>{dato.fullname}</td>
                                    <td>{dato.name}</td>
                                    <td>{dato.Cantidad}</td>
                                </tr>
                    })}
                    
                </tbody>
            </table>

        </Fragment>

            
     );
}
 
export default Tabla2;