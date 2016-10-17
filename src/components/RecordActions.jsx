import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton'
import ViewIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/image/edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'



const RecordActions = (props) => (
	<div>
		<IconButton 
			touch={true}
			tooltip="Detalhes" 
			tooltipPosition="top-center">
			<ViewIcon color="#666" />
		</IconButton>

		<IconButton 
			touch={true}
			tooltip="Editar" 
			tooltipPosition="top-center">
			<EditIcon color="#666" />
		</IconButton>

		<IconButton 
			touch={true}
			tooltip="Deletar" 
			tooltipPosition="top-center">
			<DeleteIcon color="#666" />
		</IconButton>
	</div>
);



const Validation = PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func
		]).isRequired;

RecordActions.propTypes = {
	viewAction: Validation,
	editAction: Validation,
	deleteAction: Validation
}

export default RecordActions;