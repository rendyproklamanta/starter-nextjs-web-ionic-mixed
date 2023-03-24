import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectAddUser } from '../store/usersSlice';

const ReduxComp = () => {
   const [name, setName] = useState("");
   // const { users } = useSelector((state) => state.users);
   const { users } = useSelector(selectAddUser); // updated
   const dispatch = useDispatch();
   
   const addNewUser = () => {
     dispatch(addUser(name));
   };
 
   const handleChange = (event) => {
     setName(event.target.value);
   };
 
   return (
     <div className='mt-5'>
       <label>New User:</label>
       <input type="text" value={name} onChange={handleChange} />
       <button onClick={addNewUser}>Add</button>
       <h4>User List:</h4>
       <ul>
         {users.map((user, i) => (
           <li key={i}>{user}</li>
         ))}
       </ul>
     </div>
   );
};

export default ReduxComp;