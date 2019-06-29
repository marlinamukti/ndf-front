import React from 'react';
import ImageContainer from './ImageContainer';
import Axios from 'axios';

const emptyId = 'common/default_empty_image_IG_uqv3zi.svg';
const loadingId = 'common/loading_001_gy5tff.svg';
const errorId = 'common/loading_error_001_j7fevh.svg';

class TestingTag extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        files: [],
        boxSize: this.props.boxSize,
        publicId: emptyId,
        showLoading: false,
        message: 'ready'
      }
    }

    uploadFile() {
      console.log(`begin uploading`);
      let data = new FormData();
        let file = this.state.files[0];
        let url = 'http://localhost:4000/upload';
        let headers = {
            'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTYzMzE1Nzg4MjU2MzAyY2M1ZTBmMSIsInVzZXJuYW1lIjoidXdhdGVzdDAxIiwiZW1haWwiOiJ1d2F0ZXN0MDFAdGVzdC5jb20iLCJpYXQiOjE1NjE4MTM2NDgsImV4cCI6MTU2MTg1Njg0OH0.HnCdoHM-MwjtpOQvv0a5TI-J9y9LjC4ZPeAuGJ16E-bh7fhB1WkFGldnD5XaqfMgcCcXcNVRDXNKsrXsTZB9wQ'
        }

        data.append('file', file);
        if (this.props.imageAlbum !== undefined) {
          data.append('album', this.props.imageAlbum);
        }
        
        Axios.post(url, data, { headers: headers }).then(res => {
            console.log(res); // debug only
            setTimeout(() => {
                let public_id = (res.data.result !== undefined) ? res.data.result.public_id : '';
                this.setState({
                    publicId: public_id,
                    message: res.data.message
                });
            }, 2000); // wait 1 sec to load

        }).catch(error => {
            this.showError();
            if (error.response.status && error.response.status !== 200) {
              console.log(error.response.status + ` unauthorized access`);
            }
            
        });
    }
  
    showLoading() {
      this.setState({
        publicId: loadingId
      });
    }

    showError() {
      this.setState({
        publicId: errorId
      });
    }

    acceptedFile() {
      return 'image/*';
    }

    handleClickUpload = () => {
      this.refs.fileUploader.click();
    }

    handleFileSelected = (event) => {
      let { target } = event;
      let newFile = [];
      newFile.push(target.files[0]);
      this.setState({
        files: newFile
      });
      this.showLoading();
      this.uploadFile();
    }
  
    render() {
      return (
        <React.Fragment>
          <input type="file" ref="fileUploader" 
            multiple={false} accept={this.acceptedFile()} 
            name="fileUpl" onChange={this.handleFileSelected} 
            style={{ 'display': 'none' }} />
          <ImageContainer cloudName={this.props.cloudName}
                  publicId={this.state.publicId} 
                  boxSize={this.state.boxSize} 
                  onClick={this.handleClickUpload} />
        </React.Fragment>
      );
    }
}

export default TestingTag;