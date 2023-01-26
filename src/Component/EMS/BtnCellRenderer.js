import axios from 'axios';
import { React, useState } from 'react'
import { confirm } from "react-confirm-box";

export default function BtnCellRenderer(props) {



    console.log(props);
    const [data, setdata] = useState([]);

    const btnClickedHandler = async () => {
        let data = localStorage.getItem("EMSdata")
        let p = JSON.parse(data)

        console.log(p);
        const result = await confirm("Are you sure?");
        if (result) {
            axios.delete(`http://localhost:4000/accounts/${props.data.id}`, {
                headers: {
                    Authorization: "Bearer " + p?.jwtToken
                },
            }).then(y => {

                console.log(y);
            })
        } else {

        }

    };


    return (
        <div> <button onClick={btnClickedHandler} className='btn btn-danger'>Delete</button></div>
    )
}
