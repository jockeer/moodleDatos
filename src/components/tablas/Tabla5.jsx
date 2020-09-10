
import React,{useState,useEffect,Fragment} from 'react'
import ReactHTMLTableToExcle from 'react-html-table-to-excel'
import Bar from '../graficos/Bar'
const Tabla5 = () => {
    
    const[datos, guardarDatos] = useState([])

    const info={
        cantidad:[],
        grupo:[],
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
            const API=await fetch('http://localhost:4000/api/cantidadMateriasCategoria');
            const respuesta = await API.json()
            guardarDatos(respuesta)
        }
        traerDatos()
    }, [])

    datos.map(dato=>{
        info.cantidad.push(dato.CantidadMaterias) 
        info.grupo.push(dato.name) 
        // infopie.cantidad.push(dato.cantidad) 
        // infopie.grupo.push(dato.name) 
        // infoLine.cantidad.push(datosgraf.cantidad) 
        // infoLine.grupo.push(datosgraf.name) 
        console.log(info)
    })
    info.cantidad.push(15) 
    
    return ( 
        <Fragment>
            <ReactHTMLTableToExcle id="botonExportarExcel" className="btn btn-success" table="tabla5" filename="tabla3" sheet="pagina 1" buttonText="Exportar a excel"/>
            <table className="table" id="tabla5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre de la Categoria</th>
                        <th scope="col">Cantidad de Materias</th>
                    </tr>
                            
                </thead>
                <tbody>
                    {datos.map(dato => {
                        return  <tr key={dato.id}>               
                                    <td>{dato.id}</td>
                                    <td>{dato.name}</td>
                                    <td>{dato.CantidadMaterias}</td>                          
                                </tr>
                    })}
                    
                </tbody>
            </table>
            {/* <div className="container-graficos"> */}
                <Bar data={info.cantidad} labels={info.grupo} backgroundColor={info.colorA} title='Cantidad de Estudiantes por grupo'/>
                {/* <Pie data={infopie.cantidad} labels={infopie.grupo} backgroundColor={infopie.colorA} title='Cantidad de Estudiantes por grupo'/>
                <Line data={infoLine.cantidad} labels={infoLine.grupo} backgroundColor={infoLine.colorA} title='Cantidad de Estudiantes por grupo'/>
                <Doughnut data={infopie.cantidad} labels={infopie.grupo} backgroundColor={infopie.colorA} title='Cantidad de Estudiantes por grupo'/> */}

            {/* </div> */}
        </Fragment>

            
     );
}
 
export default Tabla5;