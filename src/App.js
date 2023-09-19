import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Topbar from "./components/Topbar";


export default function App() {
  const getdatausingfetch = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getdatausingaxios = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdatausingfetch();
    getdatausingaxios();
  }, []);

  //

  const url = "http://localhost:3000/student";
  const userdata = {
    name: "soujnta",
    sirname: "kamble",
  };

  const handlewithpostfetch = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(" your data is posted", data);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const handlepostwithaxios = async () => {
    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        userdata
      );
      console.log(data, "data is posted using axios");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      {/* <div className="App"> */}
      {/* <button onClick={handlewithpostfetch}> post data using fetch</button> */}
      {/* <button onClick={handlepostwithaxios}> post data using axios</button> */}

      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
