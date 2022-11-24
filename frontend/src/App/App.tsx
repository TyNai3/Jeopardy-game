import Appbar from '../Appbar/Appbar';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import './App.css';
import * as api from './api';
import QuestionList from '../features/QuestionList/QuestionList';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadQuestions().then((data) => dispatch({ type: 'INIT', payload: data }));
  }, []);
  return (

    <Routes>
    <Route path="/" element={ <Appbar />}>
      <Route path="main" element={<MainPage />} />
      <Route path="cards" element={<QuestionList />} />
      <Route path="auth/:name" element={<Auth />} />
    </Route>
  </Routes>
  );
}
// ghg
export default App;
