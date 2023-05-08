import React from "react";
import { IPersonData } from "../../models/IPeopleData";

export const addNewContact = async (
  personToCreate: IPersonData,
  setContacts: React.Dispatch<React.SetStateAction<IPersonData[]>>
) => {
  const URL = `http://localhost:3030/people`;

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personToCreate),
  };

  try {
    const responce = await fetch(URL, fetchOptions);
    const contactData = await responce.json();

    setContacts((prevData) => [...prevData, contactData]);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
