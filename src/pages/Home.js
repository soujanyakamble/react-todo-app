import React from "react";

export default function Home() {
  return (
    <>
      <div
        className="App container-fluid d-flex text-center justify-content-center "
        style={{ backgroundColor: "#ffcad4" }}
      >
        <div className="row">
          <div className="col">
            <header className="headsection mt-5">
              <h1>Number Guessing Game</h1>
            </header>
            
            <div className="card-body">
              <section>
                {" "}
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{
                    color: "white",
                    backgroundColor: "#40679e",
                    height: "35px",
                    width: "130px",
                  }}
                >
                  Start game
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
