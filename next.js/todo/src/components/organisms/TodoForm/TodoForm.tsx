import ErrorText from '@components/atoms/forms/ErrorText'
import TextField from '@components/molecules/TextField/TextField'
import Button from '@material-ui/core/Button'
import { addTodo } from '@store/todos/actions'
import {
  Field,
  FieldProps,
  Form,
  Formik,
} from 'formik'
import React, {FC} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as Yup from 'yup';


const FieldWrapper = styled.div`
  margin-top: 30px;
  margin-left: 40px;
`

const AddButtonWrapper = styled.div`
  margin-top: 40px;
  margin-left: 40px;
`

// validation schema。yupは便利！
const TodoSchema = Yup.object().shape({
  task: Yup.string()
    .required('入力してください'),
});

export interface TodoFormValues {
  task: string;
}

const TodoForm: FC = ({}) => {
  // hooksの醍醐味。これだけでstoreに接続できる
  const dispatch = useDispatch();
  // 初期値は空文字をセット
  const initialValues: TodoFormValues = { task: '' };

  // ボタンが呼び出されたらaddTodoをdispatch
  // これでreducerにtaskが渡される
  const handleSubmit = (values: TodoFormValues) => {
    dispatch(addTodo(values.task));
  }

  return(
    <Formik
      initialValues={initialValues}
      validationSchema={TodoSchema}
      // type="submit"の要素が押された時に呼び出す関数を設定
      onSubmit={handleSubmit}
      render={({errors, touched}) => (
        <Form>
          <Field
            name="task"
            // renderでinput要素を与える
            render={(props: FieldProps) => {
              return (
                <FieldWrapper>
                  <TextField
                    label={'タスク'}
                    type={'text'}
                    fieldProps={props}
                  />
                  {errors.task && touched.task &&
                  <ErrorText>
                    {errors.task}
                  </ErrorText>}
                </FieldWrapper>
              )
            }}
          />
          <AddButtonWrapper>
            <Button type="submit" variant="contained" color="primary">追加</Button>
          </AddButtonWrapper>
        </Form>
      )}
    />)
};

export default TodoForm;
