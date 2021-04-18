import headers from './headers';

const loginUser = ({ email, password }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = fetch('/api/users/login', options);
  const data = response.json();
  return data;
};

export default loginUser;

export const fetchData = async (path, method = 'GET', body = {}) => {
  const options = {
    method,
    headers,
    body: JSON.stringify(body),
  };

  const response = await fetch(path, options);
  const data = await response.json();
  return data;
};
