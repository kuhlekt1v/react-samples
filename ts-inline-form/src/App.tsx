import React from 'react';
import { OutlinedField } from './components/material-ui/OutlinedField';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  userName: string;
  password: string;
}

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <OutlinedField label="Username..." />
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <input defaultValue="Username" {...register('userName')} />
        <input {...register('password', { required: true })} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
