import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Excerises = ({ setExercises, exercises, bodyPart }) => {
  
  const [currentPage,setCurrentPage] = useState(1)
  const excerisesPerPage = 9

  const indexOfLastExercise = currentPage * excerisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - excerisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e,value) =>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  console.log("exercises", exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises?.map((exercise,index) => (
          <ExerciseCard exercise={exercise}/>
        ))}
      </Stack>
      <Stack>
        {exercises?.length > excerisesPerPage && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises?.length / excerisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excerises;
