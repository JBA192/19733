import React, { Component } from 'react';
import tableau from 'tableau-api';

const TableauReact = () => {

    // componentDidMount() {
    // }

    const initViz = () => {
        var containerDiv = document.getElementById("vizContainer");
        var url = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';

        new window.tableau.Viz(containerDiv, url);
    }
    initViz();


    return (
        <div id='vizContainer'>
            <script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
        </div>
    )
}


export default TableauReact;