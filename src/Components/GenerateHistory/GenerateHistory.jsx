import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from "../../constants"
import s from './GenerateHistory.module.css'

export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

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