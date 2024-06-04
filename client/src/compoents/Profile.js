import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import jwtDecode from "jwt-decode"; // Correct import

function Profile() {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decoded = jwtDecode(token); // Correct usage
      console.log(decoded, 'decoded');
      setId(decoded.id);
      axios.get(`http://localhost:3000/api/user/9`) // Correct template string
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  return (
    <div className='userInfo'>
      <img src={data.ImageUrl} alt="User" />
      <h3 className='userName'>{data.Name}</h3>
      <h3 className='userAdress'>{data.Email}</h3><br />
      <h3 className='Type'>{data.Type}</h3><br />

      {/* <button>Update</button> */}
    </div>
  );
}

export default Profile;
