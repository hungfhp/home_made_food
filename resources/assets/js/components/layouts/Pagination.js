import React, { Component } from "react";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        let current_page = this.props.pagination.current_page;
        let last_page = this.props.pagination.last_page;
        return (
            <div className="pagination-box">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {current_page > 1
                            &&
                            <li className="page-item"><a className="page-link" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, 1)}><span aria-hidden="true">««</span></a></li>
                        }{current_page > 1
                            &&
                            <li className="page-item"><a className="page-link" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, current_page-1)}><span aria-hidden="true">«</span></a></li>
                        }{current_page > 2
                            &&
                            <li className="page-item"><a className="page-link" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, current_page-1)}><span aria-hidden="true">{current_page-1}</span></a></li>
                        }

                            <li className="page-item"><a className="page-link active" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, current_page)}>{current_page}</a></li>
                        
                        {current_page < last_page - 1
                            &&
                            <li className="page-item"><a className="page-link" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, current_page+1)}><span aria-hidden="true">{current_page+1}</span></a></li>
                        }{current_page < last_page
                            &&
                            <li className="page-item"><a className="page-link" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, current_page+1)}><span aria-hidden="true">»</span></a></li>
                        }{current_page < last_page
                            &&
                            <li className="page-item"><a className="page-link" href={this.props.href_to} onClick={()=>this.props.getDataPaging(this.props.user_id, last_page)}><span aria-hidden="true">»»</span></a></li>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}







