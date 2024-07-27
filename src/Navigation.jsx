import { Link } from "react-router-dom"

export const Navigation = () => {
	return (
		<nav style={{display: 'flex', flexDirection: 'column'}}>
			<Link to="/generate">Generate QR Code</Link>
			<Link to="/scan">Scan QR Code</Link>
			<Link to="/">History of scanned codes</Link>
			<Link to="/">History of generated codes</Link>
		</nav>
	)
}