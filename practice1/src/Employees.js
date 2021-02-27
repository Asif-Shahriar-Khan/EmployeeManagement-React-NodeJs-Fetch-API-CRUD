import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';



const Employees = () => {

    const [employees, setemployees] = useState([]);

useEffect(() => {
getemployees();
}, []);

const getemployees= async() => {
const res = await Axios.get('http://localhost:4000/employees')
/*.then(res => {
console.log('res', res.data);*/
setemployees(res.data);
//});
}

const delEmployees = async id => {
    await Axios.delete(`http://localhost:4000/delete/${id}`)
    getemployees();
};


    return (
        <div>
             <h1>Crud By Fetching API</h1>
            
             <Link to="/add" > ADD EMPLOYEE </Link>

             <table>
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>Age</th>
                         <th>Designation</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                    
                     
                     { employees.map((employee, index) =>(
                     <tr key={index} >
                         <td>{employee.id}</td>
                         <td>{employee.name}</td>
                         <td>{employee.age}</td>
                         <td>{employee.designation}</td>
                         <td> <Link to="/edit">Edit</Link> 
                          <button onClick={()=>delEmployees(employee.id)} >Delete</button></td>
                      </tr>
                     ))}
                 </tbody>
             </table>
             
        </div>
    )
}

export default Employees
