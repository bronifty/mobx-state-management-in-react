export default class Gateway {
  get = async () => {
    return Promise.resolve({
      firstName: 'John',
      lastName: 'Doe',
    });
  };
}
