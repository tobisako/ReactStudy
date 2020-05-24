import ErrorText from '@components/atoms/forms/ErrorText'
import TextField from '@components/molecules/TextField/TextField'
import Button from '@material-ui/core/Button'
import CircleProgress from '@material-ui/core/CircularProgress'
import {login} from '@store/auth/asyncActions'
import { StoreState } from '@store/index'
import {
  Field,
  FieldProps,
  Form,
  Formik,
} from 'formik'
import React, {FC} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import * as Yup from 'yup';


const FieldWrapper = styled.div`
  margin-top: 30px;
  margin-left: 40px;
`

const LoginButtonWrapper = styled.div`
  margin-top: 40px;
  margin-left: 40px;
`

const LoginSchema = Yup.object().shape({
  login_id: Yup.string()
    .required('入力してください'),
  password: Yup.string()
    .required('入力してください'),
});

export interface LoginFormValues {
  login_id: string;
  password: string;
}

const LoginForm: FC = ({}) => {
  const auth = useSelector((state: StoreState) => state.auth);

  const dispatch = useDispatch();
  const initialValues: LoginFormValues = { login_id: '', password: '' };

  // ログインボタンが押されたらlogin ActionCreatorをdispatchする
  const handleSubmit = (values: LoginFormValues) => {
    dispatch(login(values));
  }

  return(
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
      render={({errors, touched}) => (
        <Form>
          <Field
            name="login_id"
            render={(props: FieldProps) => {
              return (
                <FieldWrapper>
                  <TextField
                    label={'ID'}
                    type={'text'}
                    fieldProps={props}
                  />
                  {errors.login_id && touched.login_id &&
                  <ErrorText>
                    {errors.login_id}
                  </ErrorText>}
                </FieldWrapper>
              )
            }}
          />
          <Field
            name="password"
            render={(props: FieldProps) => {
              return (
                <FieldWrapper>
                  <TextField
                    label={'パスワード'}
                    type={'password'}
                    fieldProps={props}
                  />
                  {errors.password && touched.password &&
                  <ErrorText>
                    {errors.password}
                  </ErrorText>}
                </FieldWrapper>
              )
            }}
          />
          <LoginButtonWrapper>
            <Button type="submit" variant="contained" color="primary" disabled={auth.isFetching}>ログイン</Button>
            // 通信中ならローディングを表示する
            {auth.isFetching && <CircleProgress/>}
          </LoginButtonWrapper>
        </Form>
      )}
    />)
};

export default LoginForm;
