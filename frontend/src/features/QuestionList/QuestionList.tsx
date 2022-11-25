import React from "react";
import { useSelector } from "react-redux";
import QuestionItem from "../QuestionItem/QuestionItem";
import { RootState } from "../reducer/store";
import './QuestionList.css'


function QuestionList(): JSX.Element {
  const { questions, topics } = useSelector((state: RootState) => state.questionsState);

  // console.log(questions, topics)

  return (
    <>
      <div><h1>Счет:</h1></div>
      <div className="cards__container">
        {topics.map((topic) => {
          return <>

            <h1>{topic.title}</h1>
            <div className="row">{questions.filter((question => question.topic_id === topic.id)).map((question) => <QuestionItem key={question.id} question={question} />)}</div>
          </>
        })}
      </div>
    </>

  )
}
export default QuestionList;
