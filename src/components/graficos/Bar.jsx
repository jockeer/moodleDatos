import React from 'react'
import {Bar as Grafico} from 'react-chartjs-2'
const Bar = ({labels,data,backgroundColor,title}) => {
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
                                    label: title,
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
 
export default Bar;