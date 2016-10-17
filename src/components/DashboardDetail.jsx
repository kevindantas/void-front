import React from 'react';



const styles = {
	num: {
		fontSize: 70,
		fontWeight: 700,
		background: '#444',
		color: '#fff',
	    borderRadius: 100,
	    padding: 20,
	    width: 120,
	    height: 120,
    	display: 'inline-block',
    	textAlign: 'center'
	}, 
	info: {
    	fontSize: 30,
    	width: 200,
    	display: 'inline-block',
	    lineHeight: 1,
	    marginLeft: 12
	}
}

const DashboardDetail = (props) => (
	<p className="DashboardDetail">
		<span style={styles.num}>
			{props.num}
		</span>

		<span style={styles.info}>
			{props.info}
		</span>
	</p>
)

export default DashboardDetail;