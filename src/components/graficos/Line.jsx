import React from 'react'
import {Line as Grafico} from 'react-chartjs-2'
const Line = ({labels,data,backgroundColor,title}) => {
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
                                    fill:false,
                                    lineTension:0.2,
                                    pointRadius: 7,
                                    pointHitRadius:10,
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
 
export default Line;