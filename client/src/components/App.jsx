import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./Main.jsx";
import Quiz from "./Quiz.jsx";
import Result from "./Result.jsx";
import { CheckUserExist } from "../helper/helper.jsx";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

function App() {
  console.log("App is rendering...");

  return <RouterProvider router={router} />;
}

export default App;
