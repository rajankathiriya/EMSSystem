import axios from 'axios';
import { React, useState } from 'react';
import Navbar from './Navbar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const Dashboard = () => {


    const [column, setcolumn] = useState([
        { field: "id", filter: "agNumberColumnFilter" },
        { field: "title", filter: true },
        { field: "firstName", filter: true },
        { field: "lastName", filter: true },
        { field: "email", filter: true, sortable: true },
        { field: "created", filter: true },
        { field: "isVerified", filter: true },
        { field: "role", filter: true },

    ]);
    const [row, setrow] = useState([]);

    const dataFetch = (e) => {
        let data = localStorage.getItem("EMSdata")
        let p = JSON.parse(data)
        axios.get("http://localhost:4000/accounts", {
            headers: {
                "Authorization": "Bearer " + p?.jwtToken
            }
        }).then(
            e => {
                setrow(e.data)
                console.log(e.data);
            }
        ).catch(
            y => {
                console.log(y);
            }
        )
    }
    return (
        <div>
            <Navbar />

            <div className='mx-auto'>
                <button onClick={dataFetch} className=' btn btn-outline-primary'>Fetch Data</button>
            </div>

            <div className="ag-theme-alpine" style={{ width: "100 %", height: 600 }}>
                <AgGridReact rowData={row} columnDefs={column}></AgGridReact>
            </div>

        </div>
    );
}

export default Dashboard;
