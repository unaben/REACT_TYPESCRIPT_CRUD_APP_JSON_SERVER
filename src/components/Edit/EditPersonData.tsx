import React, { FC } from "react";
import { editContact } from "../../api/editContact/editContact";
import { IPersonData, IPersonState } from "../models/IPeopleData";

type IEditContactDataProps = {
  contacts: IPersonData[];
  setContacts: React.Dispatch<React.SetStateAction<IPersonData[]>>;
  editPersonId: string | null;
  setEditPersonId: React.Dispatch<React.SetStateAction<string | null>>;
  editPersonData: Partial<IPersonData>;
  setEditPersonData: React.Dispatch<React.SetStateAction<IPersonState>>;
};

const EditPersonData: FC<IEditContactDataProps> = ({
  contacts,
  setContacts,
  editPersonId,
  setEditPersonId,
  editPersonData,
  setEditPersonData,
}) => {
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPersonData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleEditFormSubimt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const personToUpdate = {
      fName: editPersonData.fName,
      lName: editPersonData.lName,
      age: editPersonData.age,
      job: editPersonData.job,
    };
    editContact(contacts, setContacts, personToUpdate, editPersonId);
    setEditPersonId(null);
  };

  return (
    <div>
      <form
        onSubmit={handleEditFormSubimt}
        style={{ display: "flex", flexDirection: "column", maxWidth: "50%" }}
      >
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter first name ..."
          name="fName"
          value={editPersonData.fName}
          onChange={handleEditChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last name ..."
          name="lName"
          value={editPersonData.lName}
          onChange={handleEditChange}
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter age ..."
          name="age"
          value={editPersonData.age}
          onChange={handleEditChange}
        />
        <label>Occupation</label>
        <input
          type="text"
          placeholder="Enter your occupation ..."
          name="job"
          value={editPersonData.job}
          onChange={handleEditChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPersonData;
