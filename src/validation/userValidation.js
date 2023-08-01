import * as yup from "yup";

export const mySchema = yup.object().shape({
  Name: yup.string().required("enter your name"),
  Email: yup.string().email().required(),
  Age: yup.number().integer().positive().required(),
  Gender: yup.string().required(),
});
