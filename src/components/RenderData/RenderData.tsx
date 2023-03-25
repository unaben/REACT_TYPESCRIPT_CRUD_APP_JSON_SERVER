import React, { FC } from "react";
import { deleteContact } from "../../api/deleteContact/deleteContact";
import { IPersonData } from "../models/IPeopleData";

type IRenderDataProps = {
  contacts: IPersonData[];
  setContacts: React.Dispatch<React.SetStateAction<IPersonData[]>>;
  handleEditClick: (data: IPersonData) => void;
  handleCancelClick: () => void;
};

const RenderData: FC<IRenderDataProps> = ({
  contacts,
  setContacts,
  handleCancelClick,
  handleEditClick,
}) => {
  const handleDelete = (id: string) => {
    deleteContact(id, contacts, setContacts);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Occupation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact: IPersonData) => {
          return (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.fName}</td>
              <td>{contact.lName}</td>
              <td>{contact.age}</td>
              <td>{contact.job}</td>
              <td style={{ display: "flex" }}>
                <button
                  style={{ marginRight: "0.5rem" }}
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
                <button
                  style={{ marginRight: "0.5rem" }}
                  onClick={() => handleEditClick(contact)}
                >
                  Edit
                </button>
                <button onClick={handleCancelClick}>Cancel</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RenderData;
