import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./src/Pages/Layout/Layout";
import RoutesWithNotFound from "./src/Pages/404/RoutesWithNotFound";
import NotesList from "./src/Pages/NoteList/NoteList";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route element={<Layout />}>
          <Route path="/" element={<NotesList />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
