import { CrudProvider } from "./components/context/CrudContext";
import CrudApi from "./components/crudapi";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <div>
      <h1>React Context</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        Documentación
      </a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </div>
  );
}

export default App;
