import React, { useEffect, useState } from "react";
import ListContainer from "./commons/ListContainer";
import axios from "axios";

const Scrap = () => {
  const [contents, setContents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/v1/scrap", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContents(res.data.data);
      });
  }, [contents, token]);

  return (
    <>
      {contents && (
        <ListContainer contents={contents} type="scrap"></ListContainer>
      )}
    </>
  );
};

export default Scrap;
