import * as React from 'react'
import axios from 'axios'

import Button from '../Button/component';
import { FormUpload } from './style';

const FileUpload = ({ selectedFiles, setSelectedFile, removeFile }) => {

  const upload = async (event) => {

    const file = event.target.files[0]
    console.log(file)
    if (!file) return
    file.isUploading = true
    setSelectedFile([...selectedFiles, file])

    const dataForm = new FormData()
    dataForm.append(
      'uploadFile',
      file,
      file.name
    )

    axios.post('http://localhost:3001/api/upload', dataForm)
      .then((res) => {
        file.isUploading = false
        setSelectedFile([...selectedFiles, file])
      })
      .catch((err) => {
        console.error(err)
        removeFile(file.name)
      })
  }

  return (
    <FormUpload
      encType="multipart/form-data"
    >
      <Button
        label={'Selecione o(s) Arquivo(s)'}
        type='file'
        buttonColor={'#ffff'}
        widthButton='90%'
        handleChange={upload}
        name='uploadFile'
      />
      <Button
        label={'Enviar'}
        buttonColor={'#00f5d4'}
        type='submit'
      />
    </FormUpload>
  )
}

export default FileUpload;