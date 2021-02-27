import React,{useState} from 'react'
import Axios from 'axios';
import {useHistory} from 'react-router-dom';


const Add= () => {
    let history= useHistory();
    const [employees, setemployees] = useState({
        id:"",
        name:"",
        age:"",
        designation:"",
    });

    const {id, name, age, designation} = employees;

    const onInputChange= e => {
        setemployees({ ...employees, [e.target.name] : e.target.value});
    };

    const onSubmit= async e =>{
        e.preventDefault();
await Axios.post("http://localhost:4000/add", employees);
history.push("/");
    }


    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
            
            <input type="number" name="id" placeholder="Enter ID" value={id}
            onChange={e => onInputChange(e)} />
            <input type="text" name="name" placeholder="Enter Name" value={name}
            onChange={e => onInputChange(e)} />
            <input type="text" name="age" placeholder="Enter Age" value={age}
            onChange={e => onInputChange(e)} />
            <input type="text" name="designation" placeholder="Enter Designation" value={designation}
            onChange={e => onInputChange(e)} />
            <button> Add </button>
            </form>
            
            
        </div>
    )
}

export default Add