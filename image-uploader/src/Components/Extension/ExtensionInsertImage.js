import React, {Fragment, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import image from './image/image.svg'
import { postImage } from '../../store/imagesStore/imagesStore'
import { useDispatch } from 'react-redux'

const ExtensionInsertImage = () => {
    const dispatch = useDispatch()
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(i => {
            const fromData = new FormData()
            fromData.append('uploadImage', i)
            dispatch(postImage(fromData))
        })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <Fragment>
            <div {...getRootProps()} className='dropImage'>
                <img src={image}/>
                {
                    isDragActive ?
                    <h1>Drop the files here ...</h1> :
                    <h1>Drag & Drop your image here</h1>
                }
            </div>
            <h3>Or</h3>
            <div className='chooseFile'>
                <input type='file' id='Cimage' {...getInputProps()} accept='image/*'/>
                <label htmlFor='Cimage'>Choose a file</label>
            </div>
        </Fragment>
    )
}
export default ExtensionInsertImage