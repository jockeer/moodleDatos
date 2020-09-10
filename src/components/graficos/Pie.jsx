import React from 'react'
import {Pie as Grafico} from 'react-chartjs-2'
const Pie = ({labels,data,backgroundColor,title}) => {
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
 
export default Pie;