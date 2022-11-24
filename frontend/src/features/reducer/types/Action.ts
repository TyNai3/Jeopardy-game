import Question from "../../QuestionList/types/Question";
import Topic from "../../QuestionList/types/Topic";

type Action =
 | { type: 'INIT_QUESTIONS'; payload: Question[] }
 | { type: 'INIT_TOPICS'; payload: Topic[] }

export default Action;
