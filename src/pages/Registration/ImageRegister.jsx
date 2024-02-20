import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BorderBtn } from "../../components/commons/Btns";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { GrayRoundInput } from "../../components/commons/Inputs";
const ImageRegister = (i) => {
  const [img, setImg] = useState([]);
  const [fileName, setFileName] = useState([]);
  const ImgInput1 = useRef();
  const ImgInput2 = useRef();
  const [preview, setPreview] = useState("");
  const [des, setDes] = useState("");
  const [name, setName] = useState("");
  const [previewArr, setPreviewArr] = useState([
    "../../imgs/preview.jpeg",
    "../../imgs/preview2.jpeg",
  ]);
  const onClickImgBtn1 = () => {
    ImgInput1.current.click();
  };
  const onClickImgBtn2 = () => {
    ImgInput2.current.click();
  };
  const encodeFileToBase64 = (i, file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        img[i] = reader.result;
        setImg([...img]);
        resolve();
      };
    });
  };
  const filePreview = (i, name) => {
    fileName[i] = name;
    setFileName([...fileName]);
  };
  const clickPreview = () => {
    setTimeout(previewImage, 2000);
  };
  const previewImage = () => {
    setPreview(previewArr[i.cnt]);
  };
  const clickSave = () => {};

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
              style={{ display: "none" }}
              ref={ImgInput1}
              onChange={(e) => {
                encodeFileToBase64(0, e.target.files[0]);
                filePreview(0, e.target.files[0].name);
              }}
            ></input>
            <img
              onClick={onClickImgBtn1}
              src="../../imgs/ImgUpload.svg"
              alt="upload"
            ></img>
            <div style={{ fontSize: "8px", margin: "5px 0" }}>
              {fileName[0]}
            </div>
          </InputContainer>

          {img.length >= 1 && <Img src={img[0]} alt="preview-img" />}
        </ImgContent>
        <ImgContent>
          <InputContainer>
            <input
              type={"file"}
              style={{ display: "none" }}
              ref={ImgInput2}
              onChange={(e) => {
                encodeFileToBase64(1, e.target.files[0]);
                filePreview(1, e.target.files[0].name);
              }}
            ></input>
            <img
              onClick={onClickImgBtn2}
              src="../../imgs/ImgUpload.svg"
              alt="upload"
            ></img>
            <div style={{ fontSize: "8px", margin: "5px 0" }}>
              {fileName[1]}
            </div>
          </InputContainer>

          {img.length === 2 && <Img src={img[1]} alt="preview-img" />}
        </ImgContent>
        <ImgContent>
          {preview && preview.length > 0 ? (
            <Img src={preview} style={{ marginTop: "50px" }}></Img>
          ) : (
            <PreviewBtn onClick={clickPreview}>결과보기</PreviewBtn>
          )}
        </ImgContent>
      </ImageSection>
      <GrayRoundInput
        placeholder="작품명을 입력하세요"
        style={{ padding: "0 10px" }}
        onChange={(e) => setName(e.target.value)}
      />
      <GrayTextArea
        placeholder="작품 설명을 적으세요."
        style={{ padding: "10px" }}
        onChange={(e) => setDes(e.target.value)}
      ></GrayTextArea>
      <SaveBtn src="../../imgs/check-circle.svg" onClick={clickSave}></SaveBtn>
    </ImageRegisterContainer>
  );
};

export default ImageRegister;
const ImageRegisterContainer = styled(ColContainer)`
  gap: 10px;
  width: 100%;
  position: relative;
`;

const TopSection = styled(RowContainer)`
  justify-content: space-between;
  width: 100%;
  color: #a6a6a6;
  font-weight: 600;
`;

const ImageSection = styled(RowContainer)`
  width: 100%;
  gap: 10px;
`;

const ImgContent = styled(ColContainer)`
  width: 30%;
  height: 250px;
`;

const InputContainer = styled(ColContainer)`
  width: 100%;
  align-items: flex-start;
  height: 20%;
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
`;

const GrayTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  border-radius: 12px;
`;

const PreviewBtn = styled(BorderBtn)`
  margin: 140px 0 0 50px;
  height: 30px;
`;

const SaveBtn = styled.img`
  width: 24px;
  position: absolute;
  height: 24px;
  bottom: 20px;
  right: 10px;
`;
