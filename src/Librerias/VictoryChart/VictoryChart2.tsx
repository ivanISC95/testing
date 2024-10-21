import React, { useState } from 'react';
import { VictoryAxis, VictoryBrushContainer, VictoryLine, VictoryZoomContainer, VictoryChart, VictoryScatter, VictoryVoronoiContainer, VictoryTooltip } from 'victory';

export const VictoryChart2 = () => {
    const [state, setState] = useState({ zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] } });

    function handleZoom(domain: any) {
        setState({ zoomDomain: domain });
    }

    return (
        <div style={{ width: '1000px', height: '500px', background: '', display: 'flex', flexDirection: 'column' }}>
            <VictoryChart
                style={{ parent: { width: '100%', height: '80%' } }} // Ajusta el gráfico al contenedor
                scale={{ x: "time" }}
                containerComponent={
                    <VictoryVoronoiContainer voronoiDimension="x"
                        labels={({ datum }) => `y: ${datum.b}`}
                        labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: "white" }} />}
                    />                    
                }
            >
                <VictoryLine
                    style={{ data: { stroke: "tomato" } }}
                    data={[
                        { a: new Date(1982, 1, 1), b: 125 },
                        { a: new Date(1987, 1, 1), b: 257 },
                        { a: new Date(1993, 1, 1), b: 345 },
                        { a: new Date(1997, 1, 1), b: 515 },
                        { a: new Date(2001, 1, 1), b: 132 },
                        { a: new Date(2005, 1, 1), b: 305 },
                        { a: new Date(2011, 1, 1), b: 270 },
                        { a: new Date(2015, 1, 1), b: 470 }
                    ]}
                    x="a"
                    y="b"
                />
            </VictoryChart>
            <VictoryChart
                style={{ parent: { width: '100%', height: '20%' } }} // Ajusta el gráfico al contenedor
                padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                scale={{ x: "time" }}
                containerComponent={
                    <VictoryBrushContainer
                        brushDimension="x"
                        brushDomain={state.zoomDomain}
                        onBrushDomainChange={handleZoom}
                    />
                }
                width={1600}
            >
                <VictoryAxis
                    tickFormat={(x) => new Date(x).getFullYear()}
                />
                <VictoryScatter
                    style={{ data: { fill: "tomato" } }}
                    data={[
                        { key: new Date(1982, 1, 1), b: 125 },
                        { key: new Date(1987, 1, 1), b: 257 },
                        { key: new Date(1993, 1, 1), b: 345 },
                        { key: new Date(1997, 1, 1), b: 515 },
                        { key: new Date(2001, 1, 1), b: 132 },
                        { key: new Date(2005, 1, 1), b: 305 },
                        { key: new Date(2011, 1, 1), b: 270 },
                        { key: new Date(2015, 1, 1), b: 470 }
                    ]}
                    x="key"
                    y="b"
                />
            </VictoryChart>
        </div>
    );
};
