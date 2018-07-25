import React, { Component } from "react";
import Footer from "../../components/layouts/Footer";
import { translate, Trans } from 'react-i18next';

class Index extends Component {
    render() {
        return (
            <div>
                <h2>Index</h2>
                <Footer/>
            </div>
        );
    }
}
export default translate('translations')(Index);
