import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const Edit = () => {

    let history= useHistory();
    const{id} = useParams();
    const[employees, setemployees] = useState({
        id:"",
        name:"",
        age:"",
        designation:""
    });

    const { name, age, designation} = employees;

    const onInputChange= e =>{
        setemployees({...employees, [e.target.name] : e.target.value});
    };

    useEffect(()=>{
getemployees();
    }, []);

const onSubmit= async e =>{
    e.preventDefault();
    await Axios.put(`http://localhost:4000/edit/${id}`, employees);
    history.push("/");
};

const getemployees= async () =>{
    const res = await Axios.get(`http://localhost:4000/employees/${id}`);
    setemployees(res.data);

};


    return (
        <div>

            <form onSubmit={e => onSubmit(e)}>
            <input type="number" name="id" placeholder="Enter ID" value={id}
            onChange= {e => onInputChange(e)}/>
            <input type="text" name="name" placeholder="Enter Name" value={name}
            onChange={e => onInputChange(e)} />
            <input type="text" name="age" placeholder="Enter Age" value={age}
            onChange={e => onInputChange(e)} />
            <input type="text" name="designation" placeholder="Enter Designation" value={designation}
            onChange={e => onInputChange(e)} />
            <button> Update </button>
            </form>
            
        </div>
    )
}

export default Edit
