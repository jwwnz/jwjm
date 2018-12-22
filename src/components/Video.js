import React from 'react';
import VideoSource from '../resources/prestigevideo.mp4';

export default function Video() {
    return (
        <div className="padding-medium center">
            {/* Map */}
            <video width="100%" height="80%" controls>
                <source src={VideoSource} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
