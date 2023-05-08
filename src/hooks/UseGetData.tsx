import { useEffect, useState } from "react";
import { IPersonData } from "../models/IPeopleData";

type IApiPersonData = {
  peopleData: IPersonData[];
};

export const useFetchPeopleData = (): IApiPersonData => {
  const [peopleData, setPeopleData] = useState<IApiPersonData[]>([]);

  useEffect(() => {
    const getPeopleData = async () => {
      const baseURL = `http://localhost:3030/people`;
      try {
        const response = await fetch(baseURL);
        const resData = await response.json();
        setPeopleData(resData) as unknown as IPersonData[];
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    getPeopleData();
  }, []);

  return { peopleData } as unknown as IApiPersonData;
};
