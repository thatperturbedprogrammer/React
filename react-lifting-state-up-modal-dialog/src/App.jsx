import { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(true);

  function hideModalHandler() {
    setmodalIsVisible(false);
  }
  return (
    <>
      <PostsList modalIsVisible={modalIsVisible} hideModal={hideModalHandler} />
    </>
  );
}

export default App;
