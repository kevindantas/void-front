import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Paper from 'material-ui/Paper';

class DiscoveryFeature extends Component {

	state = {
		coords: null,
		open: false,
		closed: false,
    size: 1100
  };


  static defaultProps = {
    color: '#8BC34A'
	};




	static propTypes = {
		color: PropTypes.string,
		size: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
			]),
		text: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node
			]),
		textStyle: PropTypes.object
	}


	componentDidMount() {
		let childrenNode = ReactDOM.findDOMNode(this.refs.discovery).children[0]

		this.setState({
			coords: childrenNode.getBoundingClientRect()
		});


    var size,
      factor = 1.2;

    if(window.innerWidth < 480) factor = 1.65;

    if(window.innerWidth > window.innerHeight)
      size = window.innerHeight * factor;
    else
      size = window.innerWidth* factor;


    this.setState({
      size: size
    });

	}


	calculateCoords() {

	}




	/**
	 * Render the feature description
	 *
	 */
	renderText() {

		if(!this.props.text)
			return;

		const defaultTextStyle = {
			maxWidth: 320,
			color: '#fff',
			position: 'relative',
			left: '15%',
			top: '25%',
		};

    if (window.innerWidth < 480) {
      var responsizeText = {
        maxWidth: 260,
        left: '10%',
        fontSize: 20
      };
    }


		var textStyle = Object.assign(defaultTextStyle, this.props.textStyle, responsizeText);

		if(typeof this.props.text == 'string')
			return (<h3 style={textStyle}>{this.props.text}</h3>);

		return <div style={textStyle}>{this.props.text}</div>;
	}

	circleTransition = {
		transition: 'all 750ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
	};



	render() {
		var { coords } = this.state;

		const defaultCircleStyle = {
			background: this.props.color,
			width: this.props.size || this.state.size,
			height: this.props.size || this.state.size,
			position: 'fixed',
			transform: 'scale(0)',
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
				transition: 'all 1100ms cubic-bezier(0.23, 1, 0.32, 1) 350ms'
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




		var circleTransition = {};
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

		var circleStyle = Object.assign(defaultCircleStyle, positionCircle, this.circleTransition),
		 	innerCircleStyle = Object.assign(defaultInnerCircleStyle, innerCircle);

		return (
			<div>
				<Paper
					onTransitionEnd={() => this.circleTransition.transition = 'all 650ms cubic-bezier(0.79,-0.17, 0.82, 0.1)'}
					style={circleStyle}
					circle={true}>
					{ this.renderText() }
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
