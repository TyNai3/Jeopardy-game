import React from 'react';
import { useSelector } from 'react-redux';
import QuestionItem from '../QuestionItem/QuestionItem';
import { RootState } from '../reducer/store';

function QuestionList(): JSX.Element {
  const { questions, topics } = useSelector((state: RootState) => state.questionsState);

  // console.log(questions, topics)

  return (
    <div className="cards__container">
      {topics.map((topic) => (
<>
          <h1>{topic.title}</h1>
          <div>{questions.map((question) => <QuestionItem key={question.id} question={question} />)}</div>
</>
))}
    </div>
  );
}
export default QuestionList;
