export class UserModel {
  personid: number = 0;
  fullname: string = '';

  constructor(id: number, name: string) {
    this.personid =id;
    this.fullname = name;
  }

}