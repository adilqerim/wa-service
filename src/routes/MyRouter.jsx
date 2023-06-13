import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'


import NotFound from '../screens/not-found/NotFound.jsx'
import { routes } from './routes.data.js'
import React from 'react'

const MyRouter = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{/* TODO: Auth routes */}
				{routes.map(route => {

					if (route.isAuth && !isAuth) {
						return false
					}

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component/>}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default MyRouter
