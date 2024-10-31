import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { iconoEjemplo } from '../../Icons/Icons';

export const D3 = () => {
    // Datos del gráfico
    const data = [
        { x: 30, y: 30 },
        { x: 86, y: 50 },
        { x: 168, y: 80 },
        { x: 234, y: 90 },
        { x: 42, y: 60 },
        { x: 80, y: 150 },
        { x: 160, y: 200 }
    ];

    // SVG que quieres usar (puedes reemplazarlo por tu SVG)
    const iconSVG = `
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 11L10.5 14M0.75 14.75L2.625 12.875M12.375 3.125L14.25 1.25M6 7.25L4.5 8.75M8.25 9.5L6.75 11M10.5 11L13.5 14M3.75004 8L7.50004 11.75L6.37504 12.875C6.13029 13.1278 5.83767 13.3294 5.51423 13.468C5.19079 13.6066 4.843 13.6795 4.49113 13.6824C4.13925 13.6852 3.79032 13.618 3.46467 13.4847C3.13903 13.3513 2.84317 13.1545 2.59435 12.9057C2.34553 12.6569 2.14871 12.361 2.01537 12.0354C1.88203 11.7097 1.81483 11.3608 1.81768 11.0089C1.82054 10.657 1.8934 10.3092 2.03201 9.98581C2.17062 9.66237 2.37221 9.36975 2.62504 9.125L3.75004 8ZM11.25 7.99995L7.5 4.24995L8.625 3.12495C8.86975 2.87212 9.16237 2.67053 9.48581 2.53192C9.80925 2.39331 10.157 2.32045 10.5089 2.31759C10.8608 2.31474 11.2097 2.38194 11.5354 2.51528C11.861 2.64862 12.1569 2.84543 12.4057 3.09426C12.6545 3.34308 12.8513 3.63894 12.9847 3.96458C13.118 4.29023 13.1852 4.63916 13.1824 4.99103C13.1795 5.34291 13.1066 5.6907 12.968 6.01414C12.8294 6.33758 12.6278 6.6302 12.375 6.87495L11.25 7.99995Z" stroke="#2393F4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    `;

    useEffect(() => {
        const width = 600;
        const height = 400;

        // Limpiar el SVG antes de renderizar
        d3.select('#scatterPlot').selectAll('*').remove();

        // Crear el SVG
        const svg = d3.select('#scatterPlot')
            .attr('width', width)
            .attr('height', height);

        // Escalas
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([height, 0]);

        // Crear los puntos usando el SVG personalizado
        data.forEach(d => {
            svg.append('foreignObject')
                .attr('x', xScale(d.x) - 5) // Ajustar para centrar el ícono
                .attr('y', yScale(d.y) - 5) // Ajustar para centrar el ícono
                .attr('width', 10)
                .attr('height', 10)
                .append('xhtml:div')
                .html(iconSVG);
        });

        // Ejes (opcional)
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        svg.append('g')
            .call(d3.axisLeft(yScale));
    }, [data]);

    return (
        <div>
            <h2>Gráfico de Puntos con SVG Personalizado</h2>
            
            <svg id="scatterPlot"></svg>
        </div>
    );
};