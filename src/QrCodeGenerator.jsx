import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

import './qrCodeGenerator.css'

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("hi")
  const [result, setResult] = useState('')

	const onClickHandler = (event) => {
		setResult(value)
    setValue('')
	}

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    setResult('')
  }

	return (
		<div>
      {result !== '' && (
        <QRCodeSVG value={result}/>
      )}
			<input className='input' type="text" value={value} onChange={onChangeHandler}/>
			<button type="button" onClick={onClickHandler}>Generate QRCode</button>
		</div>
	)
}