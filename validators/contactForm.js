import * as Yup from 'yup'
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Must have at least 1 character')
    .max(255, 'Must be shorter than 255 characters. Sorry:(')
    .required('Please, enter a name'),
  text: Yup.string()
    .min(1, 'Must have at least 1 character')
    .max(255, 'Must be shorter than 255 characters. Sorry:(')
    .required('Please, enter a text'),
  email: Yup.string()
    .email('Please enter valid email address')
    .max(255, 'Must be shorter than 255 characters. Sorry:(')
    .required('Please, enter an email'),
})
