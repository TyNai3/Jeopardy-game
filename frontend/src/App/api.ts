import Question from '../features/QuestionList/types/Question'
import Topic from '../features/QuestionList/types/Topic'

export const loadQuestions = async (): Promise<Question[]> => {
  const res = await (fetch('http://localhost:4000/cards/questions'))
  return res.json()
}

export const loadTopics = async (): Promise<Topic[]> => {
  const res = await (fetch('http://localhost:4000/cards/topics'))
  return res.json()
}