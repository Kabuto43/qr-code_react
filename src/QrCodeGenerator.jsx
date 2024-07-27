import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

import './qrCodeGenerator.css'

export const QRCodeGenerator = () => {
    const [value, setValue] = useState("")
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
    }

    return (
        <div className="container">
            <input
                className="input" type="text" 
                value={value} onChange={onChangeHandler}
                placeholder="Enter text..."
            />

            <button className="button" type="button" onClick={onClickHandler}>
                Generate QRCode
            </button>

            {result !== '' && (
                <div className="qrWrapper">
                    <QRCodeSVG value={result} size={200}/>
                </div>
            )}
        </div>
    )
}