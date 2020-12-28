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
