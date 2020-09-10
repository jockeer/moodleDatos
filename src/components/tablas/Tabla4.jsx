
import React,{useState,useEffect,Fragment} from 'react'
import ReactHTMLTableToExcle from 'react-html-table-to-excel'
import Bar from '../graficos/Bar'
import Pie from '../graficos/Pie'
import Line from '../graficos/Line'
import Doughnut from '../graficos/Donouth'
const Tabla4 = () => {
    
    const[datos, guardarDatos] = useState([])
    const [datosGrafico, guardarDatosGrafico] = useState([])
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

    const infopie={
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
    const infoLine={
        cantidad:[4000,4500,3500,5000,6000,4500],
        grupo:['2015','2016','2017','2018','2019','2020'],
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
            const API=await fetch('http://localhost:4000/api/usuarioRegistradoPorCurso');
            const API2=await fetch('http://localhost:4000/api/alumnosPorGrupo');
            const respuesta = await API.json()
            const respuesta2 = await API2.json()
            guardarDatos(respuesta)
            guardarDatosGrafico(respuesta2)
            
        }
        traerDatos()
    }, [])

    datosGrafico.map(datosgraf=>{
        info.cantidad.push(datosgraf.cantidad) 
        info.grupo.push(datosgraf.name) 
        infopie.cantidad.push(datosgraf.cantidad) 
        infopie.grupo.push(datosgraf.name) 
        // infoLine.cantidad.push(datosgraf.cantidad) 
        // infoLine.grupo.push(datosgraf.name) 
        console.log(info)
    })
    info.cantidad.push(30) 
    
    
    return ( 
        <Fragment>
            <ReactHTMLTableToExcle id="botonExportarExcel" className="btn btn-success" table="tabla4" filename="tabla4" sheet="pagina 1" buttonText="Exportar a excel"/>
            <table className="table" id="tabla4">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre de la Materia</th>
                        <th scope="col">Nombre del estudiante</th>
                        <th scope="col">Apellido del estudiante</th>
                        <th scope="col">Grupo</th>
                    </tr>
                            
                </thead>
                <tbody>
                    {datos.map(dato => {
                        return  <tr key={dato.id}>               
                                    <td>{dato.id}</td>
                                    <td>{dato.fullname}</td>
                                    <td>{dato.firstname}</td>
                                    <td>{dato.lastname}</td>                          
                                    <td>{dato.name}</td>                          
                                </tr>
                    })}
                    
                </tbody>
            </table>
            <div className="container-graficos">
                <Bar data={info.cantidad} labels={info.grupo} backgroundColor={info.colorA} title='Cantidad de Estudiantes por grupo'/>
                <Pie data={infopie.cantidad} labels={infopie.grupo} backgroundColor={infopie.colorA} title='Cantidad de Estudiantes por grupo'/>
                <Line data={infoLine.cantidad} labels={infoLine.grupo} backgroundColor={infoLine.colorA} title='Cantidad de Estudiantes por grupo'/>
                <Doughnut data={infopie.cantidad} labels={infopie.grupo} backgroundColor={infopie.colorA} title='Cantidad de Estudiantes por grupo'/>

            </div>
        </Fragment>

            
     );
}
 
export default Tabla4;