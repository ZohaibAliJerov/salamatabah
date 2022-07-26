import React from 'react'
import '../Profile/Profile.css'

const Profile = () => {
  return (
    <div className='profile' style={{width:"100%", height:"100vh", backgroundColor:"white"}}>

        {/* <div style={{textAlign:"center"}}>
            <h1 style={{color:"black", alignItems:"center"}} >Mentor</h1>
        </div>

        <div className='mentor' style={{display:"flex", justifyContent:"space-evenly", marginTop:"100px"}}>
           <h1 style={{color:"black"}}>Zohaib</h1>
           <button>Edit mentor</button>
        </div> */}

        <div className='accountProfile'>
            <h1>Account Profile</h1>
        </div>
        <br />
        <hr />

        <div className="bio">
            <label className='label' htmlFor=""><b>Name</b></label>
            <input className='input' type="text" placeholder='Name' />

            <label className='label' htmlFor=""><b>Email</b></label>
            <input  className='input' type="text" placeholder='Email' />

            <label className='label' htmlFor=""><b>Password</b></label>
            <input  className='input' type="text" placeholder='Name' />

            <label className='label' htmlFor=""><b>Role</b></label>
            <input  className='input' type="text" placeholder='Mantor Or Mentee' />

        </div>

        <div className="editButton">
            <button><strong>Edit Profile</strong></button>
        </div>
        
    </div>
  )
}

export default Profile