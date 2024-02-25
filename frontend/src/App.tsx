import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./src/Pages/Layout/Layout";
import RoutesWithNotFound from "./src/Pages/404/RoutesWithNotFound";
import NotesList from "./src/Pages/NoteList/NoteList";
import NewNote from "./src/Pages/Note/NewNote";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route element={<Layout />}>
          <Route path="/" element={<NotesList />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/edit/:id" element={<NewNote />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
