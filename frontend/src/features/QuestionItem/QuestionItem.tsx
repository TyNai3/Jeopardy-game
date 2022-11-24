import React from "react";
import Question from '../QuestionList/types/Question'
import Box from '@mui/material/Box';

function QuestionItem({ question }: { question: Question }): JSX.Element {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h1>{question.count}</h1>
    </Box>
  )
}
export default QuestionItem