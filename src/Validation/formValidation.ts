import * as yup from 'yup';
export const postSchema = yup.object().shape({
    id: yup.number().required().positive().integer(),
    title: yup.string().required(),
});
