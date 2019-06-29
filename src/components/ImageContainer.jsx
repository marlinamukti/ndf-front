import React from 'react'
import girlFace from './ryanlerch_girlface4.svg';
import './ImageContainer.css';

class ImageContainer extends React.Component {
    containerCss() {
        return {
            'width': `${this.props.boxSize}px`,
            'height': `${this.props.boxSize}px`
        }
    }

    innerContainerCss() {
        return {
            'borderWidth': '3px',
            'borderStyle': 'dashed',
            'borderColor': '#000000',
            'borderRadius': '40px 0px 40px 0px',
            'margin': '1px',
            'float': 'left',
            'width': `${this.props.boxSize - 10}px`,
            'height': `${this.props.boxSize - 10}px`,
            'position': 'relative'
        }
    }

    imageMainCss() {
        return {
            'height': `${this.props.boxSize - 80}px`,
        }
    }

    render() {
        return(
            <React.Fragment>
                <div onClick={this.props.onClick} className="container" 
                style={this.containerCss()}>
                    <div className="inner-container" 
                    style={this.innerContainerCss()}>
                        <img src={girlFace} alt="face" 
                        className="image" style={this.imageMainCss()} />
                        <div className="middle">
                            <div>Upload</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ImageContainer;