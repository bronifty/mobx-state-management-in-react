import { makeObservable, observable, action } from 'mobx';
import Gateway from './Gateway';

export default class Repository {
  programmersModel;

  constructor() {
    this.programmersModel = { fName: null, lName: null };
    this.gateway = new Gateway();
    makeObservable(this, {
      programmersModel: observable,
      updateProgrammersModel: action,
      load: action,
    });
  }

  load = async () => {
    const dto = await this.gateway.get();
    this.programmersModel = { fName: dto.firstName, lName: dto.lastName };
  };

  updateProgrammersModel = (fName, lName) => {
    this.programmersModel = { fName, lName };
  };
}
