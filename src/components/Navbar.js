import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" },justifyContent:'none',px:"20px" }}
    >
      <Link to={"/"}>
        <img
          src={logo}
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap={"40px"}
        alignItems={"flex-end"}
        fontSize={"24px"}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2526",
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
