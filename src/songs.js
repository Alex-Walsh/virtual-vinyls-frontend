import React, { Component } from 'react';
import axios from 'axios';

class Songs extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            //will be for if the client doesn't want to/can't scan qr code
            requestedAlbumCode: ""
        }
    }
    
    componentDidMount() {
        return axios.get('http://localhost:5001/virtual-vinyls/us-central1/api/albums', {
            params: {
                album:"123456"
            }
        }).then((response) => {
            this.setState({
                songs: response.data.songs
            });
        })    
    }

    render() {
        return (
            <div className="songs">
                {this.state.songs.map((song, index) => (
                    <h1 key={index}>Song: {song} </h1>
                ))}
            </div>
        );
    }
}

export default Songs;
