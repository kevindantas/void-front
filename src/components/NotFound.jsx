import React from 'react';

const styles = {
	wrapper: {
		textAlign: 'center',
		color: '#555'
	},
	h1:  {
		marginBottom: 0,
		fontSize: 120,
		fontWeight: 700,
		textShadow: '7px 7px 0 rgba(0,0,0,.15)'
	}
}

const NotFound = ({history}) => {
	return (<div className="NotFound" style={styles.wrapper}>
		<h1 style={styles.h1}>404</h1>
		<h2>Página não encontrada</h2>
		<a href="#" onClick={history.goBack}>Voltar para página anterior</a>
	</div>)
};


export default NotFound;