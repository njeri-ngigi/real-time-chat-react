const returnFirstName = (email) => {
  let [firstName] = email.split('@');
  [firstName] = firstName.split('.');
  return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}`;
};

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user')) || {};

export {
  returnFirstName, getUserFromLocalStorage,
};
