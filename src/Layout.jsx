import { Routes, Route } from "react-router-dom"
import { Navigation } from "./Components/Navigation/Navigation"
import { QRCodeGenerator } from './Components/Generate/QRCodeGenerator'
import { QRCodeScanner} from './Components/Scan/QRCodeScanner'
import { GenerateHistory } from './Components/GenerateHistory/GenerateHistory'
import { ScanHistory } from './Components/ScanHistory/ScanHistory'

export const Layout = () => {
	return (
		<div>
			<Navigation/>

			<Routes>
        <Route path="/generate" element={<QRCodeGenerator />}/>
        <Route path="/scan" element={<QRCodeScanner />}/>
        <Route path="/scanHistory" element={<ScanHistory />}/>
        <Route path="/generateHistory" element={<GenerateHistory />}/>
      </Routes>
		</div>
	)
}