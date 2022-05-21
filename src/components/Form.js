import React from 'react';

const Form = ({ presenter }) => {
  const defaultValues = { fName: '', lName: '' };
  const [fields, setFields] = React.useState(defaultValues);
  const setField = (field, value) => {
    setFields((old) => ({ ...old, [field]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    presenter.submit(fields);
    setFields(defaultValues);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='fName'>fName: </label>
        <input
          id='fName'
          type='text'
          value={fields.fName}
          onChange={(e) => setField('fName', e.target.value)}
        />{' '}
        <label htmlFor='lName'>lName: </label>
        <input
          id='lName'
          type='text'
          value={fields.lName}
          onChange={(e) => setField('lName', e.target.value)}
        />{' '}
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Form;
