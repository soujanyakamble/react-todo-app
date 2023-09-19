import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export default function TodoList() {
  const [todoDatafrombe, settodoDatafrombe] = useState();
  const [Updatedata, setUpdatedata] = useState({
    name: "",
    email: "",
    number: "",
    picture: "",
  });
  const [tododata, settododata] = useState({
    name: "manju",
    email: "manju123@gmail.com",
    number: "7829181852",
    picture:
      "https://cdn.pixabay.com/photo/2023/07/31/13/42/anime-art-8161031_640.png",
  });
  const handlepostdata = async () => {
    const { data } = await axios.post("http://localhost:3000/todo", tododata);
    console.log(data, "posted");
  };

  const handlegetdata = async () => {
    const { data } = await axios.get("http://localhost:3000/todo");
    console.log(data, "data");
    settodoDatafrombe(data);
  };
  const Editdata = async () => {
    await axios.put(`http://localhost:3000/todo/${Updatedata.id}`, Updatedata);
    handlegetdata();
  };

  const handledeletdata = async (Id) => {
    const { data } = await axios.delete(`http://localhost:3000/todo/${Id}`);
    console.log(data, "deleted");
    handlegetdata(data);
  };

  useEffect(() => {
    handlegetdata();
  }, []);
  return (
    <div className="container">
      <div className="row">

        <div className="col">
          <div className="card p-2">
            <div className="card-header text-center">TodoList</div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                {" "}
                Name:
              </label>
              <input
                type="text"
                value={tododata.name}
                onChange={(e) =>
                  settododata({ ...tododata, name: e.target.value })
                }
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Email:
              </label>
              <input
                value={tododata.email}
                onChange={(e) =>
                  settododata({ ...tododata, email: e.target.value })
                }
                type="email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Phone:
              </label>
              <input
                type="email"
                value={tododata.number}
                onChange={(e) =>
                  settododata({ ...tododata, number: e.target.value })
                }
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                {" "}
                Picture:
              </label>
              <input
                type="picture"
                value={tododata.picture}
                onChange={(e) =>
                  settododata({ ...tododata, picture: e.target.value })
                }
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="button"
              onClick={handlepostdata}
              className="btn1 mx-2 rounded text-white fw-light"
            >
              Add Todo
            </button>
          </div>
        </div>

        <div className="col">
          <div className="d-flex justify-content-evenly">
            {todoDatafrombe &&
              todoDatafrombe.map((item, index) => (
                <>
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={item.picture}
                        height="150"
                        width="150"
                        alt="..."
                        className="rounded-circle"
                      />
                    </div>

                    <div className="card-footer">
                      <h5>Id:{index + 1}</h5>
                      <h5>Name:{item.name}</h5>
                      <h5>Email:{item.email}</h5>
                      <h5>Number:{item.number}</h5>
                    </div>

                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={(e) => handledeletdata(item.id)}
                        className="btn2  mx-2 mb-3 w-25 text-center text-white rounded"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        onClick={(e) => setUpdatedata(item)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn3  mx-2 mb-3 w-25 text-center text-white rounded"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update Data
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    {" "}
                    Name:
                  </label>
                  <input
                    type="text"
                    value={Updatedata.name}
                    onChange={(e) =>
                      setUpdatedata({
                        ...Updatedata,
                        name: e.target.value,
                      })
                    }
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    {" "}
                    Email:
                  </label>
                  <input
                    type="text"
                    value={Updatedata.email}
                    onChange={(e) =>
                      setUpdatedata({
                        ...Updatedata,
                        email: e.target.value,
                      })
                    }
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    {" "}
                    Number:
                  </label>
                  <input
                    type="text"
                    value={Updatedata.number}
                    onChange={(e) =>
                      setUpdatedata({
                        ...Updatedata,
                        number: e.target.value,
                      })
                    }
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    {" "}
                    Picture:
                  </label>
                  <input
                    type="text"
                    value={Updatedata.picture}
                    onChange={(e) =>
                      setUpdatedata({
                        ...Updatedata,
                        picture: e.target.value,
                      })
                    }
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={Editdata}
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
