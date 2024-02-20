import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditProfile from "../MyPage/EditProfile";
import axios from "axios";
const Edit = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios.get("/api/v1/user").then((res) => {
      setEmail(res.data.email);
    });
  }, []);

  return <EditProfile email={email} />;
};

export default Edit;
