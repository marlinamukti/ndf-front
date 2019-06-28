import React from 'react';
import { Image } from 'cloudinary-react';
import Axios from 'axios';
import loading from '../loading.gif';

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
            showBeginUpload: false,
            showLoading: false
        }
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

        this.showLoading();

        Axios.post(url, data).then(res => {
            setTimeout(() => {
                this.setState({
                    publicId: res.data.result.public_id,
                    showLoading: false
                });
            }, 2000); // wait 1 sec to load

        }).catch(error => {
            console.log(error);
        });
    }

    showLoading() {
        this.setState({
            showLoading: true
        });
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

    renderDisplayedImage() {
        if (!this.state.showLoading) {
            return {
                display: 'inline'
            }
        } else {
            return {
                display: 'none'
            }
        }
    }

    renderDisplayedLoading() {
        if (this.state.showLoading) {
            return {
                display: 'inline',
                width: 300,
                height: 300,
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
                <Image cloudName={this.state.cloudName} publicId={this.state.publicId} secure="true" width="300" crop="scale" style={this.renderDisplayedImage()} >
                </Image>
                <div style={this.renderDisplayedLoading()}>
                <img src={loading} alt="should_be_loading.gif file" />
                </div>
                <br />
                <p>Example Upload then handle file</p>
                <button onClick={this.handleClickUpload}>Select File</button>
                {fileList}
                <br />
                <button onClick={this.handleBeginUpload} style={this.renderDisplay()}>BEGIN UPLOAD</button>
            </div>
        );
    }
}

export default UwaUpload;