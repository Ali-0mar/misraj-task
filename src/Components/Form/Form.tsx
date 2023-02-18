import React, {useContext} from 'react';
import { useFormik } from 'formik';
import { postSchema } from '../../Validation/formValidation'
import IPost  from '../../Interfaces/IPost';
import {AppContext} from "../../State/Context";
import "./Form.scss"
type Props = {
    closeModal: (state: boolean) => void;
};

const Form: React.FC<Props> = ({closeModal}) => {
    const { addPost } = useContext(AppContext);


    const formik = useFormik({
        initialValues: { id: 0, title: '' },
        validationSchema: postSchema,
        onSubmit: (values: IPost) => {
            addPost(values)
            formik.resetForm();
            closeModal(false);
        },
    });

    return (
        <div className='form-container'>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="id">Id:</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.id && formik.touched.id && (
                            <div className='error'>{formik.errors.id}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div className='error'>{formik.errors.title}</div>
                        )}
                    </div>
                    <button type="submit" className='btn'>Submit</button>
                </form>
        </div>
    );
};

export default Form;
