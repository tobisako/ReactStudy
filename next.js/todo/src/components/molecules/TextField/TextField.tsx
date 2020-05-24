import TextInput from '@components/atoms/forms/TextInput'
import Label from '@components/atoms/label/Label'
import { FieldProps } from 'formik'
import React, {FC} from 'react'

interface Props {
  type: string
  label: string
  fieldProps: FieldProps
}

const TextField: FC<Props> = ({fieldProps, label, type }) => {
  const {field} = fieldProps
  return(
    <div>
      <Label>{label}</Label>
      <TextInput type={type} {...field}/>
    </div>
  )
}

export default TextField;
