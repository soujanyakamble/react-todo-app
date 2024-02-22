import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Topbar from "./components/Topbar";
import Gamepage from "./pages/Gamepage";



export default function App() {
   return (
    <>
      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlist" element={<TodoList />} />
          <Route path="/gotogamepage" element={<Gamepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
