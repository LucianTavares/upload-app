import styled from 'styled-components';
import { useState } from 'react';

import keyboardImage from '../images/keyboard.jpg'
import CardChoices from './Card/component';
import FileUpload from './FileUpload/component';
import FileList from './FileList/component';

const App = () => {

  const titlePage = 'BrcTech S.A.'
  const textChoices = 'Insira 1 ou mais arquivos'

  const [selectedFiles, setSelectedFile] = useState([])

  const removeFile = (filename) => {
    setSelectedFile(selectedFiles.filter(file => file.name !== filename))
  }

  return (
    <MainPage className="App">
      <TitleMainPage>
        {titlePage}
      </TitleMainPage>
      <TextChoices>
        {textChoices}
      </TextChoices>
      <CardChoices>
        <FileUpload
          selectedFiles={selectedFiles}
          setSelectedFile={setSelectedFile}
          removeFile={removeFile}
        />
      </CardChoices>
      <CardChoices>
        <FileList
          selectedFiles={selectedFiles}
          removeFile={removeFile}
        />
      </CardChoices>
    </MainPage>
  );
}

export default App;

const MainPage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: url(${keyboardImage}) center no-repeat fixed;
  background-size: cover;
  width: 100%;
  height: 98vh;
`

const TitleMainPage = styled.h1`
  font: 55px Courier, monospace;
  color: #fcbf49;
  margin-top: 70px;
`
const TextChoices = styled.h2`
  font: 30px Courier, monospace;
  color: #003049;
  margin-top: 10px;
  margin-bottom: 10px;
`
