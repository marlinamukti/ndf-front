import React from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { NONAME } from 'dns';

const hideDisplay = {
    display: 'none'
}

class UwaUpload extends React.Component {
    constructor() {
        super();
        this.state = {
            files: [],
            cloudName: "ndf001dev",
            publicId: "samples/bike.jpg"
        }
    }

    handleChangeImage = (event) => {
        console.log(`image should be changed`);
        this.setState({
            publicId: "samples/people/boy-snow-hoodie.jpg"
        });
    }

    handleChangeInput = (event) => {
        let { target } = event;
        let newFile = [];
        newFile.push(target.files[0]);
        this.setState({
            files: newFile
        });
    }

    handleClickUpload = (event) => {
        this.refs.fileUploader.click();
    }

    render() {
        let { files } = this.state;
        let fileList = this.state.files && Object.keys(files).map(key => {
            return <div key={key}>{files[key].name}</div>
        })
        return (
            <div>
                <input type="file" ref="fileUploader" multiple={false} accept="images/*" name="fileUpl" onChange={this.handleChangeInput} style={hideDisplay} />
                <Image cloudName={this.state.cloudName} publicId={this.state.publicId} width="300" crop="scale" >
                </Image><br />
                <button onClick={this.handleChangeImage}>Load other image</button>
                <br />
                <p>Example Upload then handle file</p>
                <button onClick={this.handleClickUpload}>CLICK ME</button>
                {fileList}
            </div>
        );
    }
}

export default UwaUpload;