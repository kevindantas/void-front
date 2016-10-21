import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Paper from 'material-ui/Paper';

class DiscoveryFeature extends Component {

	state = {
		coords: null,
		open: false,
		closed: false
	}


	static defaultProps = {
		color: '#8BC34A',
		size: 1100
	}

	static propTypes = {
		color: PropTypes.string,
		size: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
			]),
		textStyle: PropTypes.object
	}


	componentDidMount() {
		let childrenNode = ReactDOM.findDOMNode(this.refs.discovery).children[0]

		this.setState({
			coords: childrenNode.getBoundingClientRect()
		})
	}


	calculateCoords() {

	}



	render() {
		var { coords } = this.state;

		const defaultCircleStyle = {
			background: this.props.color,
			width: this.props.size,
			height: this.props.size,
			position: 'fixed',
			transform: 'scale(0)',
			transition: 'all 750ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
		}

		const defaultTextStyle = {
			maxWidth: 320,
			color: '#fff',
			position: 'relative',
			left: '25%',
			top: '25%',
		}


		var positionCircle 	= {},
			innerCircle 	= {},
			defaultInnerCircleStyle  = {};

		if(coords) {
			let innerWidth = coords.width / 2;
			
			var defaultInnerCircleStyle = {
				width: coords.width*2,
				height: coords.height*2,
				position: 'fixed',
				transformOrigin: 'center',
				transform: 'scale(0)',
				transition: 'all 750ms cubic-bezier(0.23, 1, 0.32, 1) 200ms'
			}
			
			positionCircle = {
				left: coords.left-defaultCircleStyle.width/2,
				top: coords.top-defaultCircleStyle.height/2,
				transformOrigin: `${defaultCircleStyle.width/2+innerWidth}px ${defaultCircleStyle.height/2+innerWidth}px`,
			}

			innerCircle = {
				left: coords.left-defaultInnerCircleStyle.width/2 + innerWidth,
				top: coords.top-defaultInnerCircleStyle.height/2 + innerWidth,
			}
		}

		if(this.props.open) {

			const closeFeature = () => {
				this.setState({closed: true}),
				document.body.removeEventListener('click', closeFeature);
			};

			document.body.addEventListener('click', closeFeature)

			if(!this.state.closed) {
				positionCircle.transform = 'none';
				innerCircle.transform = 'none';
			}
		}


		var circleStyle = Object.assign(defaultCircleStyle, positionCircle),
		 	innerCircleStyle = Object.assign(defaultInnerCircleStyle, innerCircle),
			textStyle = Object.assign(defaultTextStyle, this.props.textStyle);

		
		return (
			<div>
				<Paper 
					style={circleStyle}
					circle={true}>
						<h3 style={textStyle}>Clique nesse botão para cadastrar membros</h3>
				</Paper>
				<Paper style={innerCircleStyle} circle={true} zDepth={0}>
				</Paper>
				<div  ref="discovery">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default DiscoveryFeature