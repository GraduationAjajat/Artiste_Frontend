import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BlackBtn } from '../../components/commons/Btns'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Line } from '../../components/commons/Line'
import ListContainer from './commons/ListContainer'
import axios from 'axios'

const MyGallery = () => {
  const [contents, setContents]=useState([]);
  
  const token=localStorage.getItem("token")
  useEffect(()=>{
    axios.get('/api/v1/exhibition/user',{
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
    .then((res)=>{
    console.log(res.data)
    setContents(res.data);
    console.log(contents)
    })
  },[])
  return(
   <ListContainer contents={contents} type={"gallery"}/>
  )
}

export default MyGallery
