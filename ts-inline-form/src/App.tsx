import React from 'react';
import { OutlinedField } from './components/material-ui/OutlinedField';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubComponent1 } from './components/react-hook-forms/SubComponent1';
import { SubComponent2 } from './components/react-hook-forms/SubComponent2';

// yup
// react-hook-forms
// @hookform/resolvers (yupResolver)
// react-hook-form v7 with material ui and typescript
// https://www.youtube.com/watch?v=nt8NTuUbuG4
// Stopped @ 11:02

interface IFormInputs {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

const schema = yup.object().shape({
  userName: yup.string().min(5).max(10).required(),
  password: yup.string().min(4).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const App = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <SubComponent1 />
          <SubComponent2 />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default App;
