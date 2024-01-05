import React, { useEffect, useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Charts from './charts';


export default function Dashboard() {
    // Custom Cell Renderer (Display flags based on cell value)
    const CompanyLogoRenderer = ({ value }) => (
        <span
            style={{ display: "flex", height: "100%", width: "100%", alignItems: "center" }}
        >
            {value && (
                <img
                    alt={`${value} Flag`}
                    src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
                    style={{
                        display: "block",
                        width: "25px",
                        height: "auto",
                        maxHeight: "50%",
                        marginRight: "12px",
                        filter: "brightness(1.1)",
                    }}
                />
            )}
            <p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                {value}
            </p>
        </span>
    );


    const [rowData, setRowData] = useState([]);
    const [colDefs] = useState([
        { field: "mission" },
        {
            field: "company",
            cellRenderer: CompanyLogoRenderer
        },
        { field: "location" },
        { field: "date" },
        { field: "rocket" },
        {
            field: "price",
            valueFormatter: params => { return '$' + params.value.toLocaleString(); }
        },
        { field: "successful" }
    ]);


    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, [])

    //for add filter to all cols
    const defaultColDef = useMemo(() => ({
        filter: true,
        // editable: true
    }));





    return (
        <div className='dashboard-holder'>
            <div className="ag-grid-container">
                <h1>Space Missions</h1>
                <div className="ag-theme-quartz mt-3" style={{ width: '100%', height: 600 }}>
                    <AgGridReact
                        rowData={rowData} columnDefs={colDefs}
                        // domLayout='autoHeight'
                        defaultColDef={defaultColDef}
                        pagination={true}
                    // onCellValueChanged={event => console.log(`New Cell Value: ${event.value}`)}
                    />
                </div>
                <div className='chart-holder'>
                    <Charts
                        data={rowData}
                    />
                </div>
            </div>
        </div>
    )
}
