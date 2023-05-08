import { useEffect, useState } from "react";

import CreatePersonData from "./components/Create/CreatePersonData";
import EditPersonData from "./components/Edit/EditPersonData";
import { useFetchPeopleData } from "./hooks/UseGetData";
import { IPersonData } from "./models/IPeopleData";
import RenderData from "./components/RenderData/RenderData";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState<IPersonData[]>([]);
  const [editPersonId, setEditPersonId] = useState<string | null>(null);
  const [editPersonData, setEditPersonData] = useState({
    fName: "",
    lName: "",
    age: "",
    job: "",
  });
  const { peopleData } = useFetchPeopleData();

  useEffect(() => {
    setContacts(peopleData);
  }, [peopleData]);

  const handleEditClick = (data: IPersonData) => {
    const { id, lName, fName, age, job } = data;

    setEditPersonId(id);

    const formValues = {
      fName: fName,
      lName: lName,
      age: age,
      job: job,
    } as IPersonData;

    setEditPersonData(formValues);
  };

  const handleCancelClick = () => {
    setEditPersonId(null);
    setEditPersonData({
      fName: "",
      lName: "",
      age: "",
      job: "",
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        CRUD With Json Web Server Tutotrial
      </h1>
      <div className="twoColumnGrid">
        <div>
          <CreatePersonData data={contacts} setContacts={setContacts} />
        </div>
        <div className="twoColumnGrid">
          {editPersonId !== null && (
            <EditPersonData
              contacts={contacts}
              setContacts={setContacts}
              editPersonId={editPersonId}
              setEditPersonId={setEditPersonId}
              editPersonData={editPersonData}
              setEditPersonData={setEditPersonData}
            />
          )}
          <RenderData
            contacts={contacts}
            setContacts={setContacts}
            handleEditClick={handleEditClick}
            handleCancelClick={handleCancelClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
