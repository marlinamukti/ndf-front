import React from 'react';
import { Image } from 'cloudinary-react';
import Axios from 'axios';

const hideDisplay = {
    display: 'none'
}

class UwaUpload extends React.Component {
    constructor() {
        super();
        this.state = {
            files: [],
            cloudName: "ndf001dev",
            publicId: "samples/bike.jpg",
            showBeginUpload: false
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
            files: newFile,
            showBeginUpload: true
        });
    }

    acceptedFile() {
        // reserved for future use
        return "image/*";
    }

    handleClickUpload = (event) => {
        this.refs.fileUploader.click();
    }

    handleBeginUpload = (event) => {
        this.uploadFile();
    }

    uploadFile() {
        let data = new FormData();
        let file = this.state.files[0];
        let url = 'http://localhost:4000/testupload';
        data.append('file', file);
        data.append('name', file.name);

        Axios.post(url, data).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    }

    renderDisplay() {
        if (this.state.showBeginUpload) {
            return {
                display: 'inline'
            }
        } else {
            return {
                display: 'none'
            }
        }
    }

    render() {
        let { files } = this.state;
        let fileList = this.state.files && Object.keys(files).map(key => {
            return <div key={key}>{files[key].name}</div>
        })
        return (
            <div>
                <input type="file" ref="fileUploader" multiple={false} accept={this.acceptedFile()} name="fileUpl" onChange={this.handleChangeInput} style={hideDisplay} />
                <Image cloudName={this.state.cloudName} publicId={this.state.publicId} width="300" crop="scale" >
                </Image><br />
                <button onClick={this.handleChangeImage}>Load other image</button>
                <br />
                <p>Example Upload then handle file</p>
                <button onClick={this.handleClickUpload}>CLICK ME</button>
                {fileList}
                <br />
                <button onClick={this.handleBeginUpload} style={this.renderDisplay()}>BEGIN UPLOAD</button>
            </div>
        );
    }
}

export default UwaUpload;