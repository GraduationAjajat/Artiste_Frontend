import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { GrayText } from "../../components/commons/Font";
import { GrayInput } from "../../components/commons/Inputs";
import Grid from "../Gallery/Grid";
import axios from "axios";
const Profile = () => {
  const id = useParams();

  const [contents, setContents] = useState([{}]);
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  useEffect(() => {
    axios.get(`/api/v1/exhibition/follow/${id.id}`).then((res) => {
      console.log(res.data);
      setContents(res.data);
    });
  }, [id.id]);
  return (
    <ColContainer>
      <GalleryContainer>
        <TopContainer>
          <GrayText size={"32px"}>
            {contents[0].exhibitionArtistName}
            <br />
            GALLERY
          </GrayText>

          <GrayInput placeholder="전시회명을 검색해보세요!"></GrayInput>
        </TopContainer>
        <GridContainer>
          {contents.length > 1 ? <Grid contents={contents} /> : <></>}
        </GridContainer>
      </GalleryContainer>
    </ColContainer>
  );
};

export default Profile;
const GalleryContainer = styled(ColContainer)`
  margin: 50px 0;
  width: 80vw;
  justify-content: flex-start;
`;
const TopContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const GridContainer = styled.div`
  width: 100%;
`;
