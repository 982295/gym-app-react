import { Box, Button, Typography } from "@mui/material";
import React from "react";
import herobanner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p={"20px"}
    >
      <Typography color={"#FF2625"} fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb={"23px"}
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={3}>
        Checkout the most effective exercise
      </Typography>
      <Button variant="contained" color="error" href="#excerses" sx={{
        background:"#FF2625",
        padding:"10px"
      }}>
        Explore Excerises
      </Button>

      <Typography
        fontWeight={"600"}
        color={"#FF2625"}
        fontSize={"200px"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Excerises
      </Typography>

      <img src={herobanner} className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
