import React from "react";
import { IPersonData } from "../../models/IPeopleData";

export const deleteContact = async (
  id: string,
  contacts: IPersonData[],
  setContacts: React.Dispatch<React.SetStateAction<IPersonData[]>>
) => {
  const URL = `http://localhost:3030/people/${id}`;
  try {
    await fetch(URL, {
      method: "DELETE",
    });
    const updatedData = contacts.filter(
      (contact: IPersonData) => contact.id !== id
    );
    setContacts(updatedData);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
