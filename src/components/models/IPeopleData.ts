export interface IPersonData {
  [key: string]: string;
  id: string;
  fName: string;
  lName: string;
  age: string;
  job: string;
}

export type IPersonState = {
  fName: string;
  lName: string;
  age: string;
  job: string;
};


