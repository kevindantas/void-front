import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton'
import ViewIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/image/edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'


/**
 * Default CRUD Actions
 *
 * @property {string|function} viewAction - Actions for the viewButton
 * @property {string|function} editAction - Actions for the editButton
 * @property {string|function} deleteAction - Actions for the deleteButton
 *
 * @param  {object} props Properties from the component
 * @return {DOM}
 */
const RecordActions = (props) => {

	var viewButton,
		editButton,
		deleteButton;

	if(props.viewAction) {
		viewButton = (
			<IconButton
				touch={true}
				tooltip="Detalhes"
				tooltipPosition="top-center">
				<ViewIcon color="#666" />
			</IconButton>
		);
	}

	if(props.editAction) {
    editButton = (
			<IconButton
        		onClick={props.editAction.bind(this, props.id)}
				touch={true}
				tooltip="Editar"
				tooltipPosition="top-center">
				<EditIcon color="#666" />
			</IconButton>
		);
	}


	if(props.deleteAction) {
		deleteButton = (
			<IconButton
        		onClick={props.deleteAction.bind(this, props.id)}
				touch={true}
				tooltip="Deletar"
				tooltipPosition="top-center">
				<DeleteIcon color="#666" />
			</IconButton>
		);
	}

	return (
		<div>
			{ viewButton }
			{ editButton }
			{ deleteButton }
		</div>
	);
};



const Validation = PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func
		]);

RecordActions.propTypes = {
	viewAction: Validation,
	editAction: Validation,
	deleteAction: Validation
}

export default RecordActions;
