import React, {useEffect, useState} from 'react'
import ListContainer from './commons/ListContainer'
import axios from 'axios';

const Scrap = () => {
  const [contents, setContents]=useState([]);
  const [loading, setLoading]=useState(true);
  const token=localStorage.getItem("token")
  
  useEffect(()=>{
    axios.get('/api/v1/scrap',{
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
    .then((res)=>{
    console.log(res.data.data)
    setContents(res.data.data);
    console.log(contents)
    })
  },[])

  return (
   
    <ListContainer contents={contents} type="scrap">

    </ListContainer>
   
   
   //props로 찜한 데이터 보내주기 
  )
}

export default Scrap