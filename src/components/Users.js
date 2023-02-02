import UserCard from './UserCard';
import React, { useEffect, useState } from 'react';
import './Users.css';
function Users() {
    const [userdata, setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const totalItems = 10;
    const itemsPerPage = 3;
    const [dataRange,setDataRange] = useState([0,itemsPerPage+1])
    const buttons = Math.ceil(totalItems/itemsPerPage)
    const buttonArray = [...Array(buttons).keys()]

    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json()
        setData(result)
    }

    function changeUsers(e){
        if(currentPage*itemsPerPage > totalItems){
            setDataRange([currentPage*itemsPerPage-itemsPerPage,totalItems])
        }
        else{
            setDataRange([currentPage*itemsPerPage-itemsPerPage,currentPage*itemsPerPage])
        }      
    }

    useEffect(() => {
        changeUsers()
    }, [currentPage])

    useEffect(() => {
        getData()
    }, [totalItems])

    return (
        <>
            <div className="pagination">
                <button className='navigation' onClick={()=>currentPage>1?setCurrentPage(currentPage-1):1}><i className="fa-solid fa-chevron-left"></i></button>
                {buttonArray.map((val)=>{
                    return <button onClick={(e)=>setCurrentPage(Number(e.target.innerText))} key={val} id={`button${val}`}>{val+1}</button>
                })}
                <button className='navigation' onClick={()=>currentPage<buttons?setCurrentPage(currentPage+1):buttons}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            {userdata.slice(dataRange[0],dataRange[1]).map((val, ind) => {
                return <UserCard data={val} key={ind} />
            })}
        </>
    )
}

export default Users
