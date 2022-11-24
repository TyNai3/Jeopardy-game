import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import Appbar from '../features/Appbar/Appbar';
import './App.css';
import * as api from './api';
import QuestionList from '../features/QuestionList/QuestionList';
import FormRega from '../features/FormRega/FormRega';

function App(): JSX.Element {
  console.log(1)
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadQuestions().then((data) =>  dispatch({ type: 'INIT_QUESTIONS', payload: data }));
    api.loadTopics().then((data) => dispatch({ type: 'INIT_TOPICS', payload: data }));
  }, []);
  return (

    <Routes>
    <Route path="/" element={<Appbar />}>
      <Route path="registration" element={<FormRega />} />
      {/* <Route path="main" element={<MainPage />} /> */}
      <Route path="cards" element={<QuestionList />} />
      {/* <Route path="auth/:name" element={<Auth />} /> */}
    </Route>
    </Routes>
  );
}
// ghg
export default App;
