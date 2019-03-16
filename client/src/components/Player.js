import React, { Component } from "react";
import "../App.css";
import axios from "axios"
require('dotenv').config()


class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // parameters for the search that can be changed by the user
            videoDuration: "any", //short / medium / long / any
            videoId: false,
            relevanceLanguage:"de",
            //loading:true
        }
    }

    // componentWillReceiveProps(newProps) ComponentDidUpdate better!


    componentDidMount(props) {
        axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                
                part: 'snippet', //by default
                q: this.props.keyword,
                videoDuration: this.state.videoDuration,
                maxResults: "50",
                videoEmbeddable: true, // search to only videos that can be embedded into a webpage
                type: "video", //required by parameter "videoEmbeddable"
                key: process.env.REACT_APP_YOUTUBE_API_KEY
                // channelId: 'UCqmQ1b96-PNH4coqgHTuTlA',
                //loading:false
            }
        })
            .then((res) => {
                const randomVideo = Math.floor(Math.random() * 51)
                
                this.setState({ videoId: res.data.items[randomVideo].id.videoId })
                
            })

    }


    render() {

        const src = `https://www.youtube.com/embed/${this.state.videoId}?modestbranding=1&color=white`

        return (

            <div class="video-player">
                {this.state.videoId && <iframe  src={src} allowFullScreen></iframe>}
            </div>
        );
    }

}

export default Player
