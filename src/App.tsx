import React from "react";
import Permissions from "./Permissions/index";
import permissions from "./permissions";
import "./App.css";

function App() {
  const permissionsActive = [
    "cd89a7a9-066d-4961-afc6-0d6d190ff97b",
    "787ef47a-8af3-40aa-b811-a230aa543151",
    "f304c37e-daa8-456a-8f2b-5b9806622bdd",
  ];

  return (
    <>
      <Permissions
        permissions={permissions}
        permissionsActive={permissionsActive}
        onChange={(value) => console.log(value)}
        parentsExpanded
        // showExpands
      />
    </>
  );
}

export default App;
