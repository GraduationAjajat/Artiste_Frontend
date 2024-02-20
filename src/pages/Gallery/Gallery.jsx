import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { RowContainer, ColContainer } from "../../components/commons/Container";
import { GrayText } from "../../components/commons/Font";
import { GrayInput } from "../../components/commons/Inputs";
import Grid from "./Grid";

const Gallery = () => {
  const radios = ["최신순", "조회순", "좋아요순"];
  const tags = [
    "#풍경",
    "#인물",
    "#꽃",
    "#정물",
    "#모네",
    "#바로크",
    "#르네상스",
  ];

  const [contents, setContents] = useState([]);

  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  useEffect(() => {
    axios.get("/api/v1/exhibition").then((res) => {
      setContents(res.data);
    });
  }, []);

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const [isClickTag, setIsClickTag] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [sort, setSort] = useState("최신순");

  const ClickRadio = (e) => {
    setSort(e.target.value);
  };

  const clickTags = (tag, i) => {
    setTag(tag);
    setIsClickTag(isClickTag.map((t, index) => (index === i ? 1 : 0)));
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onSearch();
    }
  };

  const onSearch = useCallback(() => {
    let searchSort = "";
    if (sort === "최신순") {
      searchSort = "createdDate";
    } else if (sort === "조회순") {
      searchSort = "hits";
    } else {
      searchSort = "scrapCount";
    }
    axios
      .get("/api/v1/exhibition/search", {
        params: {
          search: search,
          sortBy: searchSort,
          tags: tag,
        },
      })
      .then((res) => {
        setContents(res.data);
      });
  }, [search, sort, tag]);

  useEffect(() => {
    onSearch();
  }, [onSearch, sort, tag]);

  return (
    <ColContainer>
      <GalleryContainer>
        <TopContainer>
          <GrayText size={"32px"}>
            ART
            <br />
            GALLERY
          </GrayText>
          <GrayInput
            placeholder="전시회명을 검색해보세요!"
            onKeyPress={onKeyPress}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></GrayInput>
        </TopContainer>
        <Tags>
          {tags.map((tag, i) => (
            <Tag
              onClick={() => {
                clickTags(tag.substring(1), i);
              }}
              click={isClickTag[i]}
            >
              {tag}
            </Tag>
          ))}
        </Tags>
        <RadioBtns>
          {radios.map((radio) => (
            <Label>
              <RadioBtn
                type="radio"
                value={radio}
                checked={sort === radio}
                onChange={ClickRadio}
              ></RadioBtn>
              {radio}
            </Label>
          ))}
        </RadioBtns>
        <GridContainer>
          <Grid contents={contents} />
        </GridContainer>
      </GalleryContainer>
    </ColContainer>
  );
};

export default Gallery;
const GalleryContainer = styled(ColContainer)`
  margin: 30px 0;
  width: 80vw;
  justify-content: flex-start;
`;

const TopContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`;

const Tags = styled(RowContainer)`
  width: 100%;
  justify-content: flex-start;
  margin: 35px 0;
  gap: 45px;
`;

const RadioBtns = styled(RowContainer)`
  width: 100%;
  justify-content: flex-start;
  gap: 26px;
  margin-bottom: 35px;
`;

const RadioBtn = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid #000000;
  vertical-align: middle;
  border-radius: 100%;
  margin-right: 10px;
  margin-bottom: 5px;
  :checked {
    background-color: #000000;
  }
`;

const Label = styled.label``;

const GridContainer = styled.div`
  width: 100%;
`;

const Tag = styled.div`
  font-weight: ${(props) => (props.click === 1 ? 800 : 400)};
`;
