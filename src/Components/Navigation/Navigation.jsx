import { Link } from "react-router-dom"
import s from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={s.container}>
			<Link to="/generate">Generate QR Code</Link>
			<Link to="/scan">Scan QR Code</Link>
			<Link to="/">History of scanned codes</Link>
			<Link to="/">History of generated codes</Link>
		</nav>
	)
}