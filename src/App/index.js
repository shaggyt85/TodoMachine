import React from "react";
import AppUi from "./AppUi";
import { TodoProvider } from "../context/TodoContext";
function App() {
  return (
    <>
      <TodoProvider>
        <AppUi />
      </TodoProvider>
    </>
  );
}
export default App;
