import React from 'react'
import { FaFileAlt, FaSpinner, FaTrash } from 'react-icons/fa'
import { Action, ListFileItem, FileName } from './style'

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <ListFileItem
        key={file.name}
      >
        <FaFileAlt className='svg' />
        <FileName>{file.name}</FileName>
        <Action>
          <div className='loading'></div>
          {file.isUploading &&
            <FaSpinner className="fa-spin" onClick={() => deleteFile(file.name)} />}
          {!file.isUploading &&
            <FaTrash className='svg' onClick={() => deleteFile(file.name)} />}
        </Action>
      </ListFileItem>
    </>
  )
}

export default FileItem