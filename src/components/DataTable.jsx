import React,  { Component, PropTypes } from 'react'
import  { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

import RecordActions from './RecordActions'

/**
 * DataTable for generic data
 *
 * @property {Array<String>} headers - Headers names
 * @property {Array<Object>} data - Data to display on TableBody
 * @property {Bool} hasActions - If the table should have actions or not
 * @property {Object} actions - The actions for each button
 */
class DataTable extends Component {


	/**
	 * Component validations
	 * @type {Object} -
	 *       headers {Array<String>=} Header names
	 *       data {Array<Object>} 
	 */
	static propTypes = {
		headers: PropTypes.arrayOf(PropTypes.string),
		data: PropTypes.arrayOf(PropTypes.object),
		hasActions: PropTypes.bool,
		actions: PropTypes.object
	}


	static defaultProps = {
		hasActions: true
	}


	/**
	 * Render the thead columns
	 * @return {Array} 
	 */
	renderHeader() {
		if(!this.props.headers) return;


		var tableHeaders = this.props.headers;

		if(this.props.hasActions) 
			tableHeaders.push('Ações');


		return (
			<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				<TableRow>
					{
						tableHeaders.map((name, i) => (
							<TableHeaderColumn key={i}>{name}</TableHeaderColumn>
						))
					}
				</TableRow>
			</TableHeader>
		);
	}



	/**
	 * Render the tbody content
	 * 
	 * @return {Array}
	 */
	renderBody() {
		const tdStyle = {
			overflow: 'visible'
		}

		return this.props.data.map((team, i) => (
			<TableRow key={i} hoverable={true}>
				<TableRowColumn>Kevin Dantas</TableRowColumn>
				<TableRowColumn>Foto</TableRowColumn>
				<TableRowColumn style={tdStyle}>
					<RecordActions 
						viewAction={`/admin/equipe/${team.id}`}
						editAction={`/admin/equipe/${team.id}`}
						deleteAction={`/admin/equipe/${team.id}`} />
				</TableRowColumn>
			</TableRow>
		));
	}



	/**
	 * Render component
	 * 
	 */
	render() {
		return (
			<Table selectable={false} bodyStyle={{overflow: 'visible'}}>
				
						{ this.renderHeader() }


				<TableBody
					preScanRows={false}
					displayRowCheckbox={false}>
					{ this.renderBody() }
				</TableBody>
			</Table>
		);
	}
}

export default DataTable;