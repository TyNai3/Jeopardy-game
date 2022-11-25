import React, { useState } from "react";
import Question from '../QuestionList/types/Question'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';
// import game from '../QuestionItem/sound/svoya_igra-30-sec.mp3'

function QuestionItem({ question }: { question: Question }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState(1)
  const dispatch = useDispatch();
  // const [play,{stop}] = useSound(game);
  const [timer, setTimer] = useState(30);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value)
    setAnswer(e.target.value)
  }
  const checkAnswer = () => {
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      setScore((score) => score + question.count)
    } else {
      setScore((score) => score - question.count)
    }
    setDisplay(0)
    handleClose()
  }


  return (
    <div>
      <Button style={{opacity:display}} variant="outlined" onClick={handleClickOpen} >
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
          <h1 style={{color:'black'}}>{question.count}</h1>
        </Box>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <h1>{question.name}</h1>
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Введите ответ"
            type="email"
            fullWidth
            variant="standard"
            value={answer}
            onChange={handleAnswer}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={checkAnswer}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  
  )
}
export default QuestionItem