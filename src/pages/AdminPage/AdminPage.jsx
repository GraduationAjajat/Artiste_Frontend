import React, { useState } from "react";
import styled from "styled-components";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { BlackText } from "../../components/commons/Font";
import ListContainer from "../MyPage/commons/ListContainer";
import QnA from "./QnA";
import Edit from "./Edit";
import User from "./User";
import { useEffect } from "react";
import axios from "axios";
const AdminPage = () => {
  const [contents, setContents] = useState([]);
  const [user, setUser] = useState({});
  const [tab, setTab] = useState(1);
  useEffect(() => {
    axios.get("/api/v1/admin/waiting", {}).then((res) => {
      console.log(res.data.data);
      setContents(res.data.data);
    });
    axios.get("/api/v1/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  const ClickTab = () => {
    switch (tab) {
      case 1:
        return <ListContainer contents={contents} type={"admin"} />;
      case 2:
        return <QnA />;
      case 3:
        return <User />;
      case 4:
        return <Edit />;
      default:
        return <ListContainer contents={contents} type={"admin"} />;
    }
  };
  return (
    <ColContainer>
      <MyPageContainer>
        <TopSection>
          <BlackText weight={500} size={"32px"}>
            마이페이지
          </BlackText>
        </TopSection>
        <ProfileSection>
          <Img src={user.profileImage}></Img>
          <div>
            <BlackText
              size={"24px"}
              weight={500}
              style={{ marginBottom: "10px" }}
            >
              {user.nickname}
            </BlackText>
            <BlackText size={"20px"}>admin</BlackText>
          </div>
        </ProfileSection>
        <ColContainer style={{ width: "80%" }}>
          <RowContainer style={{ width: "100%" }}>
            <Tab
              onClick={() => setTab(1)}
              className={tab === 1 ? "focused" : ""}
            >
              전시 승인 대기
            </Tab>
            <Tab
              onClick={() => setTab(2)}
              className={tab === 2 ? "focused" : ""}
            >
              문의사항
            </Tab>
            <Tab
              onClick={() => setTab(3)}
              className={tab === 3 ? "focused" : ""}
            >
              회원 관리
            </Tab>
            <Tab
              onClick={() => setTab(4)}
              className={tab === 4 ? "focused" : ""}
            >
              회원정보 수정
            </Tab>
          </RowContainer>
          <div style={{ display: "flex", width: "100%" }}>
            <ContentContainer>{ClickTab()}</ContentContainer>
          </div>
        </ColContainer>
      </MyPageContainer>
    </ColContainer>
  );
};

export default AdminPage;
const MyPageContainer = styled(ColContainer)`
  width: 80vw;
  padding: 75px 0;
`;

const TopSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const ProfileSection = styled(RowContainer)`
  width: 100%;
  margin-bottom: 60px;
`;

const Img = styled.img`
  width: 10%;
  margin-right: 30px;
`;

const Tab = styled.button`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px 5px 0px 0px;
  &.focused {
    background: #e4e4e4;
  }
  font-size: 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 470px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #c4c4c4;
  overflow: auto;
`;
