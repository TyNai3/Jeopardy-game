import React from 'react';
import { useSelector } from 'react-redux';
import QuestionItem from '../QuestionItem/QuestionItem';
import { RootState } from '../reducer/store';
import './QuestionList.css';
import Question from './types/Question';
import Topic from './types/Topic';

function QuestionList(): JSX.Element {
  const { questions, topics } = useSelector((state: RootState) => state.questionsState);
  const { score, user } = useSelector((state: RootState) => state.userState);
console.log(score);
  return (
    <>
      <h1>{`Счет:${score}`}</h1>
      <div className="cards__container">
        {topics.map((topic:Topic) => (
          <>
            <h1>{topic.title}</h1>
            <div className="row">{questions.filter(((question:Question) => question.topic_id === topic.id)).map((question:Question) => <QuestionItem key={question.id} question={question} />)}</div>
          </>
))}
      </div>
    </>

  );
}
export default QuestionList;
