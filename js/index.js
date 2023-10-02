import {AnswerCandidateListView} from "../view/AnswerCandidateListView.js";
import {Answer} from "../component/Answer.js";
import {LifeView} from "../view/LifeView.js";
import {Life} from "../component/Life.js";
import {GuessWordView} from "../view/GuessWordView.js";
import {GuessWord} from "../component/GuessWord.js";
import {GuessHistoryView} from "../view/GuessHistoryView.js";
import {GuessHistory} from "../component/GuessHistory.js";
import {AlphabetListView} from "../view/AlphabetListView.js";
import {SessionStorageUtil} from "../util/SessionStorageUtil.js";
import {Constants} from "../constant/Constants.js";
import {Url} from "../constant/Url.js";
import Router from "../router/Router.js";
import {ResultView} from "../view/ResultView.js";

const root = document.getElementById("root");
let answerString;

const pages = {
  selectAnswer: () => {
    root.innerText = "";

    new AnswerCandidateListView(root);
  },
  guessWord: () => {
    root.innerText = "";
    answerString = SessionStorageUtil.getAndRemove(Constants.ANSWER_STRING_KEY);
    if (answerString === null) {
      location.href = Url.SELECT_WORD;
      return;
    }

    const answer = new Answer(answerString);
    const lifeView = new LifeView(root, new Life());
    const guessWordView = new GuessWordView(root, new GuessWord(answerString));
    const guessHistoryView = new GuessHistoryView(root, new GuessHistory());
    new AlphabetListView({answer, lifeView, guessWordView, guessHistoryView}, root);
  },
  success: () => {
    root.innerText = "";

    new ResultView(root, "success", answerString);
    answerString = null;
  },
  fail: () => {
    root.innerText = "";

    new ResultView(root, "fail", answerString);
    answerString = null;
  }
}

const router = Router();
router.addRoute(Url.SELECT_WORD, pages.selectAnswer)
  .addRoute(Url.GUESS_WORD, pages.guessWord)
  .addRoute(Url.GUESS_SUCCESS, pages.success)
  .addRoute(Url.GUESS_FAIL, pages.fail)
  .start();