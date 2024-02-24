import { Navigate, createBrowserRouter } from "react-router-dom";
import AppModal from "../views/Modal";
import { PATHS } from "../enums/paths";
import { MemoGame, TriviaGame } from "../views";

const router = createBrowserRouter([
  {
    element: <AppModal />,
    children: [
      { index: true, element: <Navigate to={PATHS.HOME} /> },
      { path: PATHS.CARD_GAME, element: <MemoGame /> },
      { path: PATHS.TRIVIA_GAME, element: <TriviaGame /> },
    ],
  },
]);

export { router };
