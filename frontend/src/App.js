import "./style/app.css";
import { Routes, Route, Link } from "react-router-dom";
import ModalHero from "./components/modal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "./redux/action";
import View from "./components/view";
import Form from "./components/form";
import PaginatedCard from "./components/paginator";
function App() {
  const dispatch = useDispatch();
  const { heroes } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);
  return (
    <>
      <header className="header">
        <h1>Super Hero</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" className="double-border-button">
            Home
          </Link>{" "}
          <ModalHero />{" "}
        </div>
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<PaginatedCard heroes={heroes} />} />
            <Route path="/:id" element={<View />} />
            <Route
              path="/edit"
              element={
                <>
                  {" "}
                  <div></div> <Form edit={"edit"} />
                </>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
