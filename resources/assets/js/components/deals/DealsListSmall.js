import React, { Component } from "react";

import DealItemSmall from "@/components/deal/DealItemSmall";

export default class DealsListSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let deals = this.props.deals.data;
        let is_loading = this.props.deals.is_loading;
        return (
            <div>
                {
                    is_loading && <div>Loading...</div>
                }
                {
                    deals.length ? (
                        deals.map((deal, index) => {
                            return <DealItemSmall key={index} deal={deal} />
                        })
                    ):null
                }
            </div>
        )
   
    }
}
