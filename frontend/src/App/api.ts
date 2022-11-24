import Question from '../features/QuestionList/types/Question'

export const loadQuestions = async (): Promise<Question[]> => {
  const res = await (fetch('http://localhost:3000/cards'))
  return res.json()
}