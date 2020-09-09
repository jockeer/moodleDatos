import React,{useState,useEffect,Fragment} from 'react'

import ReactHTMLTableToExcle from 'react-html-table-to-excel'

import Bar from '../graficos/Bar'

const Tabla1 = () => {
    
    const[datos, guardarDatos] = useState([])

    const info={
            precio:[23.45,25.56,33.40,29.78,30.12,27.8],
            mes:['Enero','Febrero','Marzo','Abril','Mayo','Junio'],
            colorA:[
                'rgba(122,45,240,0.8)',
                'rgba(78,145,200,0.8)',
                'rgba(40,200,120,0.8)',
                'rgba(150,30,60,0.8)',
                'rgba(200,100,180,0.8)',
                'rgba(240,80,20,0.8)',
            ]
        
    }

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
            <Bar data={info.precio} labels={info.mes} backgroundColor={info.colorA} title='Precio Gasolina'/>

        </Fragment>

            
     );
}
 
export default Tabla1;