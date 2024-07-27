import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

import s from './qrCodeGenerator.module.css'

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
        <div className={s.container}>
            <input
                className={s.input} type="text" 
                value={value} onChange={onChangeHandler}
                placeholder="Enter text..."
            />

            <button className={s.button} type="button" onClick={onClickHandler}>
                Generate QRCode
            </button>

            {result !== '' && (
                <div className={s.qrWrapper}>
                    <QRCodeSVG value={result} size={200}/>
                </div>
            )}
        </div>
    )
}