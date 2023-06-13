import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import MyRouter from './routes/MyRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyRouter/>
	</React.StrictMode>
)
