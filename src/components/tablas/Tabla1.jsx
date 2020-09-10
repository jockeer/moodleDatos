import React,{useState,useEffect,Fragment} from 'react'

import ReactHTMLTableToExcle from 'react-html-table-to-excel'



const Tabla1 = () => {
    
    const[datos, guardarDatos] = useState([])

    

    useEffect(() => {
        const traerDatos = async() =>{
            const API=await fetch('http://localhost:4000/api/traerMaterias');
            const respuesta = await API.json()
            guardarDatos(respuesta)
        }
        traerDatos()
    }, [])
    
    return ( 
        <Fragment>

            <ReactHTMLTableToExcle id="botonExportarExcel" className="btn btn-success" table="tabla1" filename="tabla1" sheet="pagina 1" buttonText="Exportar a excel"/>
            <table className="table" id="tabla1">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre de la Materia</th>
                        <th scope="col">Nombre Corto</th>
                    </tr>
                            
                </thead>
                <tbody>
                    {datos.map(dato => {
                        return  <tr key={dato.id}>               
                                    <td>{dato.id}</td>
                                    <td>{dato.fullname}</td>
                                    <td>{dato.shortname}</td>
                                </tr>
                    })}
                    
                </tbody>
            </table>
            

        </Fragment>

            
     );
}
 
export default Tabla1;