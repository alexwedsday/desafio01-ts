import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number;
  age: number;

  constructor(doc_id: number, age:number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.doc_id = doc_id;
    this.age = age;
  }
}