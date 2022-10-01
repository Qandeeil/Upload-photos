var express = require('express');
var router = express.Router();
const images = require('../Schema/Image.Schema')
const multer = require('multer')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const image = await images.find()
  res.send(image)
});

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, '/home/qandeeil/Private/Project-1/API/images')
  },
  filename: (req,file,cb) => {
    cb(null, new Date().getSeconds() + file.originalname)
  }
})

const uploads = multer({
  storage
}).single('uploadImage')

router.post('/', uploads, async (req,res,next) => {
  const url = req.protocol + "://" + req.get("host");
  const {
    image = url + '/images/' + req.file.filename
  } = req.body
  const newImage = await images.create({
    image
  })
  if(newImage){
    res.send({Data: newImage, Result: true})
  }else{
    res.send({Data: newImage, Result: false, Message: "Please check your internet"})
  }
})

module.exports = router;
