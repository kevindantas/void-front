import React, { Component } from 'react';

import REST from '../images/REST.svg';
import ReactLogo from '../images/React.svg';
import '../css/Banner.css';


class Banner extends Component {

	render() {
		return (
			<div className="Banner">
				<div className="rest">
					<img src={REST} />
				</div>
				<span className="plus">+</span>
				<div className="react">
					<img src={ReactLogo} />
				</div>

				<div className="Card -break">
					Todo o projeto foi criado usando uma API RESTful para trazer os dados do banco e React para consumir e exibir os dados.
				</div>
			</div>
		);
	}
}

export default Banner;