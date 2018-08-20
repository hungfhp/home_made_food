import React, { Component } from "react";

export default class FullPageSearch extends Component {
    render() {
        return (
            <div id="full-page-search">
                <button type="button" className="close">
                    ×
                </button>
                <form action="#">
                    <input
                        type="search"
                        value=""
                        placeholder="type keyword(s) here"
                    />
                    <button type="button" className="btn btn-sm btn-color">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
