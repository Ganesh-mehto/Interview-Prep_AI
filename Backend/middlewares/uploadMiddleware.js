const multer =require('multer')

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload/")
    },
    filename:(req,file,cb)=>{
        cb(null,`${Data.now()}-${file.originalname}`)
    }
})
const fileFilter=(req,file,cb)=>{
    const allowedType=['image/jpeg','image/png',"image/jpg"]
    if(allowedType.includes(file.mimetypes)){
        cb(null,true)
    }else{
        cb(new Error('only .jpeg, .png, .jpg formats are allowed'),false)
    }
}
const upload =multer({storage,fileFilter})

module.exports=upload