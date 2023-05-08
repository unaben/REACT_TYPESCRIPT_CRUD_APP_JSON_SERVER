import React from "react";
import { IPersonData } from "../../models/IPeopleData";

export const editContact = async (
  contacts: IPersonData[],
  setContacts: React.Dispatch<React.SetStateAction<IPersonData[]>>,
  personToUpdate: Partial<IPersonData>,
  editPersonId: string | null
) => {
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personToUpdate),
  };
  const url = `http://localhost:3030/people/${editPersonId}`;
  try {
    const responce = await fetch(url, fetchOptions);
    const personData = await responce.json();

    const updatedPerson = contacts.map((contact: IPersonData) => {
      if (personData.id === contact.id) {
        return personData;
      } else {
        return contact;
      }
    });
    setContacts(updatedPerson);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
