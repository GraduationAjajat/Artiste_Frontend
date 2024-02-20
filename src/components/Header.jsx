import React from "react";
import styled from "styled-components";
import { RowContainer } from "./commons/Container";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = () => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("role");
    window.location.replace("/");
  };
  async function checkRole() {
    const res = await axios.get("/api/v1/user");
    localStorage.setItem("role", res.data.authorities[0].authorityName);
    if (res.data.authorities[0].authorityName === "ROLE_ADMIN") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/mypage";
    }
  }
  return (
    <HeaderContainer>
      <RowContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>Artiste</Logo>
        </Link>
        <Btns>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#666666" }}
          >
            <div>ARTISTE?</div>
          </Link>
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "#666666" }}
          >
            <div>ART GALLERY</div>
          </Link>
          <Link
            to="/registration"
            style={{ textDecoration: "none", color: "#666666" }}
          >
            <div>PAINT ART</div>
          </Link>
          <Link to="/qna" style={{ textDecoration: "none", color: "#666666" }}>
            <div>QNA</div>
          </Link>
        </Btns>
      </RowContainer>
      {token ? (
        <LoginBtns>
          {<Btn onClick={checkRole}>MyPage</Btn>}

          <Btn onClick={Logout}>Logout</Btn>
        </LoginBtns>
      ) : (
        <LoginBtns>
          <Link to="/login">
            <Btn>Login</Btn>
          </Link>
          <Link to="/signup">
            <Btn>Sign Up</Btn>
          </Link>
        </LoginBtns>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(RowContainer)`
  padding: 0 10vw;
  height: 10vh;
  justify-content: space-between;
  border-bottom: 1px solid rgba(102, 102, 102, 0.25);
`;

const Logo = styled.div`
  font-family: "Italiana", serif;
  font-size: 40px;
  margin-right: 60px;
  text-decoration: none;
  color: black;
`;

const Btns = styled(RowContainer)`
  font-size: 16px;
  color: #666666;
  gap: 40px;
`;

const LoginBtns = styled(RowContainer)`
  gap: 16px;
`;

const Btn = styled.button`
  width: 98px;
  height: 40px;
  border: 1px solid #111111;
  border-radius: 8px;
  background-color: white;
`;
