import React,  { Component, PropTypes } from 'react'
import  { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import LinearProgress from 'material-ui/LinearProgress';


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
	};





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



	renderColumns(data) {
    const imageStyle = {
      maxWidth: '100%',
      maxHeight: 70,
      padding: 8,
      borderRadius: 1000

    };
// console.log(this.props.data)

    var arr = [];
    for(var ind in data) {
      switch (ind) {
        case 'id':
          break;
        case 'updatedAt':
          break;
        case 'createdAt':
          break;
        case 'picture':
          arr.push(<TableRowColumn key={ind}><img style={imageStyle} src={data[ind]} alt={data.id} /></TableRowColumn>);
          break;
        case 'photo':
          arr.push(<TableRowColumn key={ind}><img style={imageStyle} src={data[ind]} alt={data.id} /></TableRowColumn>);
          break;
        case 'user': 
        	arr.push(<TableRowColumn key={ind}>{data[ind].name}</TableRowColumn>);
          break;
        default:
        	if(data[ind])
          arr.push(<TableRowColumn key={ind}>{data[ind]}</TableRowColumn>);
          break;
      }
    }

    return arr;
    // <TableRowColumn>{team.name}</TableRowColumn>
    // <TableRowColumn>Foto</TableRowColumn>
  }

	/**
	 * Render the tbody content
	 *
	 * @return {Array}
	 */
	renderBody() {
    if(!this.props.data) {
      return (<TableRow>
        <TableRowColumn style={{textAlign: 'center'}}><LinearProgress mode="indeterminate" />Carregando </TableRowColumn>
      </TableRow>);
    }

		if(!this.props.data || this.props.data.length < 1)
			return (
				<TableRow>
					<TableRowColumn style={{textAlign: 'center'}}>Nenhum registro encontrado</TableRowColumn>
				</TableRow>
			);

		const tdStyle = {
			overflow: 'visible'
		}

		return this.props.data.map((record, i) => {
      return <TableRow key={i} hoverable={true}>


        { this.renderColumns(record) }


        <TableRowColumn style={tdStyle}>
          <RecordActions
          	id={record.id}
            editAction={this.props.editAction}
            deleteAction={this.props.deleteAction} />
        </TableRowColumn>
      </TableRow>
    });
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
