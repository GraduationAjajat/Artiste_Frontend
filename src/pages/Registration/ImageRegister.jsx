import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { Flex } from '../../components/commons/Flex'
import { GrayText } from '../../components/commons/Font'
import { GrayRoundInput } from '../../components/commons/Inputs'
const ImageRegister = () => {
    const [img, setImg]=useState([])
    const [fileName, setFileName]=useState([]);
    const ImgInput1=useRef();
    const ImgInput2=useRef();
    
    const onClickImgBtn1=()=>{
        ImgInput1.current.click();
    }
    const onClickImgBtn2=()=>{
        ImgInput2.current.click();
    }
    const encodeFileToBase64=(i,file)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve)=>{
            reader.onload=()=>{
                img[i]=reader.result;
                setImg([...img]);
                resolve();
            }
        })
       
    }
    const filePreview=(i,name)=>{
        fileName[i]=name;
        setFileName([...fileName]);
        console.log(fileName);
    }
  return (
    <ImageRegisterContainer>
        <TopSection>
            <div>[미술작품]</div>
            <div>X</div>
        </TopSection>
        <ImageSection>
            <ImgContent>
                <InputContainer>
                    <input 
                    type={"file"}
                    style={{display:"none"}}
                    ref={ImgInput1}
                    onChange={(e)=>{
                        
                        encodeFileToBase64(0,e.target.files[0])
                        filePreview(0, e.target.files[0].name);
                        
                    }}
                    ></input>
                    <img onClick={onClickImgBtn1} src="../../imgs/ImgUpload.svg"></img>
                    <div style={{fontSize: "8px", margin:"5px 0"}}>{fileName[0]}</div>
                </InputContainer>
              
                { img.length=== 1  && <Img src={img[0]} alt="preview-img"/>}
                
            </ImgContent>
            <ImgContent>
                <InputContainer>
                    <input 
                    type={"file"}
                    style={{display:"none"}}
                    ref={ImgInput2}
                    onChange={(e)=>{
                        encodeFileToBase64(1, e.target.files[0])
                        filePreview(1, e.target.files[0].name);
                    }}
                    ></input>
                    <img onClick={onClickImgBtn2} src="../../imgs/ImgUpload.svg"></img>
                    <div style={{fontSize: "8px", margin:"5px 0"}}>{fileName[1]}</div>
                </InputContainer>
              
                {img.length===2 && <Img src={img[1]} alt="preview-img"/>}
                
                
            </ImgContent>
           
            
        </ImageSection>
        <GrayRoundInput placeholder='작품명을 입력하세요' style={{padding: "0 10px"}}/>
        <GrayTextArea placeholder='작품 설명을 적으세요.' style={{padding: "10px"}}></GrayTextArea>
    </ImageRegisterContainer>
  )
}

export default ImageRegister
const ImageRegisterContainer=styled(ColContainer)`
    gap: 10px;
    width: 100%;
`
const TopSection=styled(RowContainer)`
    justify-content: space-between;
    width: 100%;
    color: #A6A6A6;
    font-weight: 600;
`
const ImageSection=styled(RowContainer)`
    width: 100%;
    
`
const ImgContent=styled(ColContainer)`
    width: 30%;
    height: 250px;
`
const InputContainer=styled(ColContainer)`
    width: 100%;
    align-items: flex-start;
    height: 20%;
`
const Img=styled.img`
    width: 100%;
    height: 80%;
`
const GrayTextArea=styled.textarea`
    width: 100%;
    height: 150px;
    border: 1px solid rgba(102, 102, 102, 0.35);
    border-radius: 12px;
`