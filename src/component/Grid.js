import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {

    const gridRef = useRef();
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', filter: true },
        { field: 'model', filter: true },
        { field: 'price' }
    ]);
    const defaultColDef = useMemo(() => ({
        sortable: true
    }));

    const cellClickedListener = useCallback(event => {
        console.log('cellClicked', event);
    }, []);
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => {debugger
                setRowData(rowData)
            })
    }, []);
    const buttonListener = useCallback(e => {
        gridRef.current.api.deselectAll();
    }, []);

    return (
        <div>

            {/* Example using Grid's API */}
            <button style={{margin:'2px', 'padding-left':'10px'}} onClick={buttonListener}>Push Me</button>

            {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
            <div className="ag-theme-alpine" style={{ margin:'5px', width: '99%', height: 300 }}>

                <AgGridReact
                    ref={gridRef} // Ref for accessing Grid's API

                    rowData={rowData} // Row Data for Rows

                    columnDefs={columnDefs} // Column Defs for Columns
                    defaultColDef={defaultColDef} // Default Column Properties

                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                    rowSelection='multiple' // Options - allows click selection of rows

                    onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                />
            </div>
        </div>
    );
}
export default Grid