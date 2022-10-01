import React, {useState} from 'react'
import imageSuccess from './images/success-svgrepo-com.svg'
import back from './images/icons8-back-35.png'
import { useLocalStorage } from "react-use-storage";

const ResultPage = () => {
    const [success,setSuccess] = useLocalStorage('success', false)
    const [saveImage,setSaveImage] = useLocalStorage('saveImage', null)
    const Back = () => {
        setSuccess(false)
        window.location = '/'
    }
    const [textCopy,setTextCopy] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(saveImage)
        setTextCopy(true)
    }

    return (
        <div className='resultPage'>
            <div className='successfully'>
                <img src={imageSuccess}/>
                <h1>Uploaded Successfully</h1>
            </div>
            <div className='image'>
                <img src={saveImage}/>
            </div>
            <div className='link'>
                <input type='text' readOnly value={saveImage}/>
                <button onClick={copy}>{
                    textCopy ? (
                        <label className='copied'>
                            <img src={imageSuccess}/>
                            Copied
                        </label>
                    ) : 'Copy Link'
                }</button>
            </div>
            <img className='back' src={back} onClick={Back} />
        </div>
    )
}

export default ResultPage