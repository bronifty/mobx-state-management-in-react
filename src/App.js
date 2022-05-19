import React from 'react';
import { autorun } from 'mobx';
import { presenter } from './Shared/Presenter';

function App() {
  const [viewModel, setViewModel] = React.useState({});
  React.useEffect(() => {
    const load = async () => {
      autorun(() => {
        setViewModel(presenter.viewModel);
      });
      await presenter.load();
    };
    load();
  }, []);

  return (
    <>
      <div>{JSON.stringify(viewModel, null, 2)}</div>
      <h2>{viewModel.formattedString}</h2>
      <form style={{ display: 'flex' }}>
        <input
          value={viewModel.fName}
          onChange={(e) =>
            setViewModel({ ...viewModel, fName: e.target.value })
          }
        />
        <input
          value={viewModel.lName}
          onChange={(e) =>
            setViewModel({ ...viewModel, lName: e.target.value })
          }
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            presenter.submit(viewModel);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
