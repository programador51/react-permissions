import React, { useState } from "react";
import Permissions from "./Permissions/index";
import schemaPermissions from "./permissions";
import "./App.css";
import useTreePermissions from "./hooks/useTreePermissions";

function App() {
  const [text, setText] = useState(false);

  const [permissions, setPermissions] = useTreePermissions([
    "0bab85b8-2b1f-4cbb-bd51-9a699a0f1994",
    "f00840e3-0a71-4a79-9bbf-f2df752b2c95",
    "cd89a7a9-066d-4961-afc6-0d6d190ff97b",
  ]);

  return (
    <>
      <button onClick={() => setText(!text)}>{text ? "Hi" : "Not hi"}</button>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50vw",
            margin: "0",
          }}
        >
          <Permissions
            permissionsSchema={schemaPermissions}
            permissionsActive={permissions.active}
            initialPermissions={permissions.initialActive}
            setPermissions={setPermissions}
            showExpands
          />
        </div>
        <div
          style={{
            width: "50vw",
            background: "gray",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            position: "fixed",
            right: 0,
            backgroundColor: "#60195d",
            fontSize: "5rem",
          }}
        >
          Grupo Saiko
        </div>
      </div>
    </>
  );
}

export default App;
