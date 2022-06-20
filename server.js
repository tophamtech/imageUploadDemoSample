const express = require('express')
const imgStore = require('temp-module')

const app = express()


app.post('/upload/newimage', imgStore.uploader, function(req,res,next) {
    const srcDir = `${__dirname}/uploads`
    imgStore.imageConversion(req.fileID, srcDir)
})

app.get('/download/:imageID', function (req, res, next) {
    const srcDir = `${__dirname}/uploads`
    imgStore.downloader(req, res, next, srcDir)
})

// Default 404 catch all 
app.use(function(req, res) {
    res.status(404).json({
      message: "No such route exists"
    })
  });
  


app.listen(3002)

module.exports = app;