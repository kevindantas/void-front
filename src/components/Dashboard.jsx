import React, { Component } from 'react';
import DashboardDetail from './DashboardDetail'
class Dashboard extends Component {
	render() {
		return (
			<div className="Dashboard">
				<h1>Dashboard</h1>


				<DashboardDetail 
					num={10}
					info="Fotos cadastradas" />

				<DashboardDetail 
					num={5}
					info="Membros" />
			</div>
		);
	}
}

export default Dashboard;