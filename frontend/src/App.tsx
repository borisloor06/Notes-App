import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./src/Pages/Layout/Layout";
import RoutesWithNotFound from "./src/Pages/404/RoutesWithNotFound";
import NotesList from "./src/Pages/NoteList/NoteList";
import NewNote from "./src/Pages/Note/NewNote";
import { NoteState } from "./src/Pages/NoteList/interfaces/NoteListProps.type";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route element={<Layout />}>
          <Route path="/" element={<NotesList type={NoteState.ACTIVE} />} />
          <Route
            path="/archive"
            element={<NotesList type={NoteState.ARCHIVED} />}
          />
          <Route path="/new" element={<NewNote />} />
          <Route path="/edit/:id" element={<NewNote />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
