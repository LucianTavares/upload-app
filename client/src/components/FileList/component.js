import React from "react";
import axios from 'axios'
import FileItem from "../FileItem/component";

const FileList = ({ selectedFiles, removeFile }) => {

  const deleteFileHandler = (_name) => {
    axios.delete(`http://localhost:3001/api/upload?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((err) => console.error(err))
  }

  return (
    <ul className="file-list">
      {
        selectedFiles && selectedFiles.map(file => (
          <FileItem
            key={file.name}
            file={file}
            deleteFile={deleteFileHandler} />))
      }
    </ul>
  )

}

export default FileList