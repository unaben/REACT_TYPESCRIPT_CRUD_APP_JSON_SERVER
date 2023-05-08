import React, { useState, FC } from "react";
import { IPersonData } from "../../models/IPeopleData";
import { v4 as uuidv4 } from "uuid";
import { addNewContact } from "../../api/addNewContact/addNewContact";

type ICreatePersonData = {
  data: IPersonData[];
  setContacts: React.Dispatch<React.SetStateAction<IPersonData[]>>;
};

const CreatePersonData: FC<ICreatePersonData> = ({ data, setContacts }) => {
  const [person, setPerson] = useState({
    fName: "",
    lName: "",
    age: "",
    job: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleCreateFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (
      person.age === "" ||
      person.fName === "" ||
      person.lName === "" ||
      person.job === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    const personToCreate = {
      id: uuidv4(),
      fName: person.fName,
      lName: person.lName,
      age: person.age,
      job: person.job,
    };
    addNewContact(personToCreate, setContacts);

    setPerson({
      fName: "",
      lName: "",
      age: "",
      job: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleCreateFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          marginLeft: "1rem",
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter first name ..."
          name="fName"
          value={person.fName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last name ..."
          name="lName"
          value={person.lName}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter age ..."
          name="age"
          value={person.age}
          onChange={handleChange}
        />
        <label>Occupation</label>
        <input
          type="text"
          placeholder="Enter your occupation ..."
          name="job"
          value={person.job}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreatePersonData;
