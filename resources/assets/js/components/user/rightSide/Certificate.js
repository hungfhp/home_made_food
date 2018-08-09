import React, { Component } from "react";

export default class Certificate extends Component {
    render() {
        return (
            <div id="tab-certificate">                                
                <h3 className="heading">Update Citizen Identification</h3>
                <div className="row mb-50">
                    <div className="col-lg-12">
                        <div id="myDropZone" className="dropzone dropzone-design mb-50">
                            <div className="dz-default dz-message"><span>Drop photos here to upload</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
