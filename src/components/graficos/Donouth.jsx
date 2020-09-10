import React from 'react'
import {Doughnut as Grafico} from 'react-chartjs-2'
const Doughnut = ({labels,data,backgroundColor,title}) => {
    return ( 
        <div className="container-grafico">
            <div className="card grafico">
                <div className="card-header">
                     {title}
                </div>
                <div className="card-body">

                    <Grafico 
                        data={{
                            labels,
                            datasets:[
                                {
                                    label:title,
                                    data,
                                    backgroundColor
                                }
                            ]
                        }}
                    />
                </div>

            </div>
        </div>
     );
}
 
export default Doughnut;