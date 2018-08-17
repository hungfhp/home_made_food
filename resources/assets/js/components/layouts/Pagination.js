import React, { Component } from "react";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handlePaging = this.handlePaging.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    handlePaging(page) {
        this.props.getDataPaging(page);
        $('html, body').animate({
            scrollTop: $( this.props.href_to ).offset().top
        }, 1000);
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
                            <li className="page-item"><a className="page-link cursor-pointer" onClick={()=>this.handlePaging(1)}><span aria-hidden="true">««</span></a></li>
                        }{current_page > 1
                            &&
                            <li className="page-item"><a className="page-link cursor-pointer" onClick={()=>this.handlePaging(current_page-1)}><span aria-hidden="true">«</span></a></li>
                        }{current_page > 2
                            &&
                            <li className="page-item"><a className="page-link cursor-pointer" onClick={()=>this.handlePaging(current_page-1)}><span aria-hidden="true">{current_page-1}</span></a></li>
                        }

                            <li className="page-item"><a className="page-link cursor-pointer active" onClick={()=>this.handlePaging(current_page)}>{current_page}</a></li>
                        
                        {current_page < last_page - 1
                            &&
                            <li className="page-item"><a className="page-link cursor-pointer" onClick={()=>this.handlePaging(current_page+1)}><span aria-hidden="true">{current_page+1}</span></a></li>
                        }{current_page < last_page
                            &&
                            <li className="page-item"><a className="page-link cursor-pointer" onClick={()=>this.handlePaging(current_page+1)}><span aria-hidden="true">»</span></a></li>
                        }{current_page < last_page
                            &&
                            <li className="page-item"><a className="page-link cursor-pointer" onClick={()=>this.handlePaging(last_page)}><span aria-hidden="true">»»</span></a></li>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}







