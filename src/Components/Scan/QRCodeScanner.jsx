import { useState } from "react"
import { Scanner } from '@yudiel/react-qr-scanner'

import s from './qrCodeScanner.module.css'

export const QRCodeScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = (result) => {
		setScanned(result[0].rawValue)
	}

	return (
		<div className={s.container}>
			<Scanner 
				allowMultiple
				onScan={scanHandler} 
				components={{
					audio: false,
					finder: false,
				}}
				styles={{
					container: {width: 300}
				}}
			/>
			<p className={s.result}>The result is: {scanned}</p>
		</div>
	)
}