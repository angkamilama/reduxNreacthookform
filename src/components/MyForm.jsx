
import {useForm} from 'react-hook-form';
import styles from '../module.css/MyForm.module.css';
import { useDispatch } from 'react-redux';
import { addData } from '../slices/myDataSlice';
import {yupResolver} from '@hookform/resolvers/yup';
import  {mySchema}  from '../validation/userValidation';
import { useEffect } from 'react';



const MyForm = () => {
    const dispatch = useDispatch();
    const form = useForm({
        resolver:yupResolver(mySchema)
    });
    const {register, handleSubmit,formState,reset} = form;

    const {errors, isSubmitSuccessful } = formState;

    useEffect(()=> {
        if (formState.isSubmitSuccessful) {

            reset();
        }
    }, [isSubmitSuccessful])

    const formSubmit = (data) => {
        const action = addData(data);
        dispatch(action);
    }
    
   return(
    <>
        <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
            <div className={styles.label_container}>
                <label className={styles.label}>
                    Name:
                        <input {...register('Name')}/>
                </label>
                <p> { errors.Name?. message}</p>
            </div>
            <div className={styles.label_container}>
                <label className={styles.label}>
                    Email:
                        <input {...register('Email')}/>
                </label>
                <p> { errors.Email?. message}</p>
            </div>
            <div className={styles.label_container}>
                <label className={styles.label}>
                    Age:
                        <input {...register('Age')}/>
                </label>
                <p> { errors.Age?. message}</p>
            </div>
            <div className={styles.label_container}>
                <label className={styles.label}>
                    Gender:
                        <input {...register('Gender')}/>
                </label>
                <p> { errors.Gender?. message}</p>
            </div>
            <button>Submit</button>
        </form>
    </>
   )

}

export default MyForm;