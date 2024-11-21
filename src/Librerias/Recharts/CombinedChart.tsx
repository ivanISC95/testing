import React from "react";
import Plot from "react-plotly.js";

// Tu SVG convertido a base64
const customSVGBase64 =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJjb21wcmVzc29yIj4NCjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik00Ljg3NSAxNC4yNDk5SDEzLjEyNU00Ljg3NSAxNC4yNDk5QzMuNjc1IDE0LjI0OTkgMy4zNzUgMTIuNzUgMy4zNzUgMTJDMy4zNzUgMTEgMy4zNzUgOC41NDk5NiAzLjM3NSA2Ljc0OTk2QzMuMzc1IDQuOTQ5OTYgNC4zNzUgNC40OTk5NiA0Ljg3NSA0LjQ5OTk2QzUuNTE5NTcgNC40OTk5NiA2LjMwMDQzIDQuNDk5OTYgNy4xMjUgNC40OTk5Nk00Ljg3NSAxNC4yNDk5TDMuMzc1IDE2LjQ5OTlNMTMuMTI1IDE0LjI0OTlDMTMuNjI1IDE0LjI0OTkgMTQuNjI1IDEzLjggMTQuNjI1IDEyQzE0LjYyNSAxMC4yIDE0LjYyNSA3Ljc0OTk2IDE0LjYyNSA2Ljc0OTk2QzE0LjYyNSA1Ljk5OTk2IDE0LjMyNSA0LjQ5OTk2IDEzLjEyNSA0LjQ5OTk2QzEyLjcwNjMgNC40OTk5NiAxMS44Nzk5IDQuNDk5OTYgMTAuODc1IDQuNDk5OTZNMTMuMTI1IDE0LjI0OTlMMTQuNjI1IDE2LjQ5OTlNNy4xMjUgNC40OTk5NlYyLjYyNDk2QzYuNzUgMi4xMjQ5NiA1LjI1IDEuMzQ5OTYgMi4yNSAyLjI0OTk2TTcuMTI1IDQuNDk5OTZDOC4zODI3NiA0LjQ5OTk2IDkuNzQyMjUgNC40OTk5NiAxMC44NzUgNC40OTk5Nk0xMC44NzUgNC40OTk5NlYyLjYyNDk2QzExLjM3NSAyLjEyNDk1IDEzLjA1IDEuMzQ5OTQgMTUuNzUgMi4yNDk5NiIgc3Ryb2tlPSIjRTY3NzAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjwvZz4NCjwvc3ZnPg0K";

const CombinedChart = () => {
  const data = [
    {
      x: [1, 2, 3],
      y: [4, 5, 6],
      mode: "markers+text",
      type: "scatter",
      text: ['A', "B", "C"], // Puedes agregar texto aquí si lo deseas
      marker: {
        size: 30, // Tamaño del marcador
        symbol: `circle-open`, // El SVG en formato Base64 como marcador
      },
    },
  ];

  const layout = {
    xaxis: { range: [0, 4], title: "Eje X" },
    yaxis: { range: [3, 7], title: "Eje Y" },
    showlegend: false,
  };

  return <Plot data={data} layout={layout} />;
};

export default CombinedChart;
