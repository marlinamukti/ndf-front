import React from 'react';
import './ImageContainer.css';
import { Image, Transformation } from 'cloudinary-react';

class ImageContainer extends React.Component {
    containerCss() {
        return {
            'width': `${this.props.boxSize}px`,
            'height': `${this.props.boxSize}px`
        }
    }

    innerContainerCss() {
        return {
            'width': `${this.props.boxSize - 10}px`,
            'height': `${this.props.boxSize - 10}px`
        }
    }

    innerSize() {
        let size = this.props.boxSize - 15;
        return size;
    }

    render() {
        return(
            <div onClick={this.props.onClick} className="container" style={this.containerCss()}>
            <div className="inner-container" style={this.innerContainerCss()}>
            <Image cloudName={this.props.cloudName} publicId={this.props.publicId} alt="should_be_image" className="image" height={this.innerSize()} width={this.innerSize()}>
                <Transformation crop="fill" />
                </Image>
                <div className="middle">
                    <div>Upload</div>
                </div>
            </div>
    </div>
        );
    }
}

export default ImageContainer;