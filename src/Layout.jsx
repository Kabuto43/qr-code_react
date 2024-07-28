import { Routes, Route } from "react-router-dom"
import { Navigation } from "./Components/Navigation/Navigation"
import { QRCodeGenerator } from './Components/Generate/QRCodeGenerator'
import { QRCodeScanner} from './Components/Scan/QRCodeScanner'

export const Layout = () => {
	return (
		<div>
			<Navigation/>

			<Routes>
        <Route path="/generate" element={<QRCodeGenerator />}/>
        <Route path="/scan" element={<QRCodeScanner />}/>
      </Routes>
		</div>
	)
}