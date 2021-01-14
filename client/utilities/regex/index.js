const validName = new RegExp(/^[a-zA-Z -]+$/);
const validEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const validPassword = new RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
);
const includesLetters = new RegExp(/[A-Za-z]/);
const includesNumbers = new RegExp(/[0-9]/);
const includesSpecialCharacters = new RegExp(/[@$!%*#?&]/);

export {
  validName,
  validEmail,
  validPassword,
  includesLetters,
  includesNumbers,
  includesSpecialCharacters,
};
