import { autorun, makeObservable, observable, action } from 'mobx';
import Repository from './Repository';

class Presenter {
  viewModel;

  constructor() {
    this.repository = new Repository();
    this.viewModel = { formattedString: null, fName: null, lName: null };
    makeObservable(this, {
      viewModel: observable,
      load: action,
      submit: action,
    });
  }

  load = async () => {
    autorun(() => {
      this.viewModel = {
        formattedString: `Hello your name is ${this.repository.programmersModel.fName} ${this.repository.programmersModel.lName}`,
        fName: this.repository.programmersModel.fName,
        lName: this.repository.programmersModel.lName,
      };
    });
    await this.repository.load();
  };

  submit = (viewModel) => {
    this.repository.updateProgrammersModel(viewModel.fName, viewModel.lName);
  };
}

export const presenter = new Presenter();
