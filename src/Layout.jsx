import { Routes, Route } from "react-router-dom"
import { Navigation } from "./Navigation"
import { QRCodeGenerator } from './QRCodeGenerator'
import { QRCodeScanner} from './QRCodeScanner'

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