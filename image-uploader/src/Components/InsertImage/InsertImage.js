import React, {Fragment, useEffect, useRef, useState} from 'react'
import ExtensionInsertImage from '../Extension/ExtensionInsertImage'
import { useSelector } from 'react-redux'
import Uploading from '../Uploading/Uploading'
import { useLocalStorage } from "react-use-storage";

const InsertImage = () => {
    const [success,setSuccess] = useLocalStorage('success', false)
    const [saveImage,setSaveImage] = useLocalStorage('saveImage', null)
    const {imageStore} = useSelector(state => state)
    useEffect(() => {
        if(!imageStore.isError){
            if(imageStore.insertImage){
                if(imageStore.insertImage.Result){
                    setSuccess(true)
                    setSaveImage(imageStore.insertImage.Data.image)
                }
            }
            if(success){
                window.location = '/Done-Upload'
            }else{
                setSaveImage(null)
            }
        }
    })
    return (
        <Fragment>
            <div className={imageStore.isUploading ? 'hide' : 'insertImage'}>
                <h1>Upload your image</h1>
                <p>File should be Jpeg, Png,...</p>
                {<ExtensionInsertImage />}
            </div>
            <div className={imageStore.isUploading ? 'Uploading' : 'hide'}>
                {<Uploading />}
            </div>
            {imageStore.isError ? (
                <div className="bar error">
                    <span>Error: You must first run the server to download the server, please go to the following link:</span>
                    <a href='https://github.com/Qandeeil/Upload-photos.git' target='_blank'>https://github.com/Qandeeil/Upload-photos.git</a>
                </div>
            ) : (null)}
        </Fragment>
    )
}

export default InsertImage