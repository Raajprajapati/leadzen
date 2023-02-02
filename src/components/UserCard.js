import React, { useState } from 'react'
import './UserCard.css'
function Deta({data}) {
	const {name,username,phone,address,company,id,email,website} = data;
	const [isExpanded,setExpanded] = useState('false')

	function toggleCardInfo(){
		document.getElementById(`user${id}`).classList.toggle('hidden')
		document.getElementById(`usercard${id}`).classList.toggle('expanded')
		setExpanded(!isExpanded)
	}

	return (
		<div className='usercard' id={`usercard${id}`}>
			<div className='upper'>
				<div className='company'>{company.name}</div>
				<div className='name'>
					<h6>Contact</h6>
					<span>{name}</span>
				</div>
				<div className='username'>
					<h6>Username</h6>
					<span>{username}</span>
				</div>
				<div className='city'>
					<h6>City</h6>
					<span>{address.city}</span>
				</div>
				<div className='view'>
					<button onClick={toggleCardInfo}>{isExpanded?'view':'hide'} details</button>
				</div>
			</div>

			<div className='lower hidden' id={`user${id}`}>
				<div className='description'>
					<h6>Description</h6>
					<p>{company.name}: {company.bs}, {company.catchPhrase}.</p>
				</div>
				<div className='user_name'>
					<h6>Username</h6>
					<span>{username}</span>
				</div>
				<div className='website'>
					<h6>Website</h6>
					<span>{website}</span>
				</div>
				<div className='email'>
					<h6>Email</h6>
					<span>{email}</span>
				</div>
				<div className='city'>
					<h6>City</h6>
					<span>{address.city}</span>
				</div>				
				<div className='phone'>
					<h6>Phone</h6>
					<span>{phone}</span>
				</div>
				<div className='adress'>
					<h6>Address</h6>
					<span>{address.street} {address.city} {address.zipcode}</span>
				</div>
			</div>
		</div>
	)
}

export default Deta