import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { Flex } from "../../components/commons/Flex";
import { BlackText } from "../../components/commons/Font";
import axios from "axios";
const EditProfile = ({ email }) => {
  const [profile, setProfile] = useState({});
  const [img, setImg] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    axios.get(`/api/v1/user/${email}`).then((res) => {
      console.log(res.data);
      setProfile(res.data);
      setImg(res.data.profileImage);

      console.log(profile.profileImage);
    });
  }, [email, profile.profileImage]);

  const encodeFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      setImg(previewImgUrl);
    };
  };

  const clickEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const json = JSON.stringify({
      birthday: profile.birthday,
      email: profile.email,
      gender: profile.gender,
      nickname: nickname,
      password: pw,
      username: name,
    });

    const blob = new Blob([json], { type: "application/json" });
    formData.append("userDto", blob);
    formData.append("profileImage", img);

    axios
      .post("/api/v1/user", formData, {
        Headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <ColContainer style={{ height: "100%" }}>
      <EditProfileContainer>
        <ImgContainer>
          <Img src={img}></Img>
          <input
            type="file"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }}
          ></input>
        </ImgContainer>
        <ContentContainer>
          <Content>
            <InputTitle>ㅣ 이메일</InputTitle>
            <Input value={email} disabled></Input>
          </Content>
          <Content>
            <InputTitle>ㅣ 비밀번호</InputTitle>
            <Input
              type="password"
              onChange={(e) => setPw(e.target.value)}
            ></Input>
          </Content>
          <Content>
            <InputTitle>ㅣ 비밀번호 확인</InputTitle>
            <Input type="password"></Input>
          </Content>
          <Content>
            <InputTitle>ㅣ 이름</InputTitle>
            <Input
              placeholder={profile.username}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </Content>
          <Content>
            <InputTitle>ㅣ 닉네임</InputTitle>
            <Input
              placeholder={profile.nickname}
              onChange={(e) => setNickname(e.target.value)}
            ></Input>
          </Content>
          <Content>
            <InputTitle>ㅣ 생년월일</InputTitle>
            <Input value={profile.birthday} disabled></Input>
          </Content>
          <Content>
            <InputTitle>ㅣ 성별</InputTitle>
            <RowContainer style={{ margin: "15px 0 20px 0" }}>
              {profile.gender === 1 ? (
                <img src="../imgs/checked.svg" alt="checked"></img>
              ) : (
                <img src="../imgs/unchecked.svg" alt="unchecked"></img>
              )}
              <CheckText>남성</CheckText>
              {profile.gender === 2 ? (
                <img src="../imgs/checked.svg" alt="checked"></img>
              ) : (
                <img src="../imgs/unchecked.svg" alt="unchecked"></img>
              )}
              <CheckText>여성</CheckText>
            </RowContainer>
          </Content>
        </ContentContainer>
        <BtnContainer>
          <Btn onClick={clickEdit}>수정</Btn>
        </BtnContainer>
      </EditProfileContainer>
    </ColContainer>
  );
};

export default EditProfile;
const EditProfileContainer = styled(RowContainer)`
  padding-top: 50px;
  width: 90%;
  height: 100%;
`;

const ImgContainer = styled(Flex)`
  width: 20%;
  height: 100%;
  align-items: flex-start;
  padding-top: 20px;
  flex-direction: column;
`;

const Img = styled.img`
  width: 80%;
  height: 25%;
  border-radius: 50%;
`;

const ContentContainer = styled(ColContainer)`
  width: 70%;
  gap: 20px;
`;

const Content = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`;

const InputTitle = styled(BlackText)`
  font-size: 17px;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
`;

const BtnContainer = styled(Flex)`
  width: 10%;
  height: 100%;
  align-items: flex-end;
  padding-bottom: 30px;
  margin-left: 30px;
`;

const CheckText = styled(BlackText)`
  margin-left: 5px;
  margin-right: 20px;
`;

const Btn = styled.button`
  width: 89px;
  height: 35px;
  background: #111111;
  border: 1px solid #000000;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;
