const express = require('express')
const cors = require('cors')
const multer = require('multer')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

const upload = multer({
  dest: './uploads/',
})

app.post('/api/upload', upload.array('uploadFile'), async (req, res) => {

  setTimeout(() => {
    console.log(`Arquivo recebido: ${req.files.length}`)
    res.send({
      upload: true,
      files: req.files
    })
  }, 3000)

})

app.delete('/api/upload', (req, res) => {
  console.log('Arquivo deletado')
  return res.status(200).json({result: true, msg: 'arquivo deletado'})
})

app.listen(PORT, () => {
  console.log(`Server is runing in ${PORT}`)
})