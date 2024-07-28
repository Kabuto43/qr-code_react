import { QRCodeSVG } from 'qrcode.react'
import { SCAN_DATA } from "../../constants"
import s from './ScanHistroy.module.css'

export const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
	console.log(data)
	return (
		<div className={s.container}>
			{data.map((text) => (
				<div className={s.element} key={text}>
					<p>{text}</p>
					<QRCodeSVG value={text} size={200}/>
				</div>
			))}
		</div>
	)
}