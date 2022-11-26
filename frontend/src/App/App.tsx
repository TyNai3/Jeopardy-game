import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Appbar from '../features/Appbar/Appbar';
import './App.css';
import * as api from './api';
import QuestionList from '../features/QuestionList/QuestionList';
import Rega from '../features/Rega/Rega';
import FormLogin from '../features/FormLogo/FormLogo';
import Main from '../features/main/main';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadQuestions().then((data) => dispatch({ type: 'INIT_QUESTIONS', payload: data }));
  }, []);

  useEffect(() => {
    api.loadTopics().then((data) => dispatch({ type: 'INIT_TOPICS', payload: data }));
  }, []);
  return (

    <Routes>
    <Route path="/" element={<Appbar />}>
      <Route path="auth/registration" element={<Rega />} />
      <Route path="/" element={<Main />} />
      <Route path="cards" element={<QuestionList />} />
      <Route path="auth/login" element={<FormLogin />} />
    </Route>
    </Routes>
  );
}
// ghg
export default App;
