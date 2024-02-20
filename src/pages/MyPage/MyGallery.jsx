import React, { useState, useEffect } from "react";
import ListContainer from "./commons/ListContainer";
import axios from "axios";

const MyGallery = () => {
  const [contents, setContents] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("/api/v1/exhibition/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContents(res.data);
      });
  }, [token]);
  return <ListContainer contents={contents} type={"gallery"} />;
};

export default MyGallery;
