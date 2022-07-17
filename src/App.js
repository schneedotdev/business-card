import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
	return (
		<div className="app-container">
			<div className="card-container">
				<Info />

				<main className="main--text">
					<About />
					<Skills />
				</main>

				<Footer />
			</div>
		</div>
	)
}

export default App