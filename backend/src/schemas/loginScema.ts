const yup = require('yup');

export const loginBodySchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
