import React, { Component } from 'react'
// import Phaser from 'phaser'


class Game extends Component {
	render() {
		const iframeStyle = {
			width: '100%',
			height: 'calc(100vh - 70px)',
			border: 'none',
			margin: 'auto'

		}
		return (
			<div>
				<iframe style={iframeStyle} src="http://kevindantas.github.io/jogo_fiap"></iframe>
			</div>
		)
	}
}

export default Game;