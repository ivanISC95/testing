declare module 'react-plotly.js' {
    import { Component } from 'react';
    import Plotly from 'plotly.js';

    export interface PlotProps {
        data: any[];
        layout?: any;
        config?: any;
        style?: React.CSSProperties;
        className?: string;
        onInitialized?: (figure: Plotly.Figure) => void;
        onUpdate?: (figure: Plotly.Figure) => void;
        // Puedes añadir más props según sea necesario
    }

    export default class Plot extends Component<PlotProps> {}
}
