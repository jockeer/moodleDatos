import React,{Fragment} from 'react';
import Barra from './components/layout/Barra'

import Tabla1 from './components/tablas/Tabla1'
import Tabla2 from './components/tablas/Tabla2'
import Tabla3 from './components/tablas/Tabla3'
import Tabla4 from './components/tablas/Tabla4'
import Tabla5 from './components/tablas/Tabla5'

function App() {
  return (
    <Fragment>
      <Barra />
      <div className="container">
        <h1>Formulario de Reportes</h1>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Cursos creados</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">modulos por curso</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Grupos Creados </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contactA" role="tab" aria-controls="contact" aria-selected="false">Grupos por alumno </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contactB" role="tab" aria-controls="contact" aria-selected="false">Materias por Categoria </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <Tabla1/>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <Tabla2/>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <Tabla3/>
          </div>
          <div className="tab-pane fade" id="contactA" role="tabpanel" aria-labelledby="contact-tab">
          <Tabla4/>

          </div>
          <div className="tab-pane fade" id="contactB" role="tabpanel" aria-labelledby="contact-tab">
          <Tabla5 />

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
