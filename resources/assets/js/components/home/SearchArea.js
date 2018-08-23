import React, { Component } from "react";

export default class SearchArea extends Component {
    constructor(props) {
        super(props);
    
        this.state =  {
            foods : [],
            search : '',
            count : 0,
            width: 0,
        };
    
        this.handleSearch = this.handleSearch.bind(this);
        
        // Attaching Lodash debounce to avoid frequent ajax requests
        // this.getFoods = _.debounce(this.getFoods, 500);
    }
    
    componentDidMount() {
        // get width of search input for react search widget on initial load
        const width = document.getElementById("search").offsetWidth; 
        this.setState(() => ({ width : width }));

        // get width of search input for react search widget when page resize
        window.addEventListener('resize', (e) => {
            const newWidth = document.getElementById('search').offsetWidth; 
            this.setState(() => ({ width : newWidth }));
        });

        // To clear react search widget when press ESC
        document.body.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                this.clearData(e);
            }
        });

        document.getElementById('search').addEventListener('keydown', (e) => {
            // check whether up or down arrow keys are pressed
            if (e.keyCode === 38 || e.keyCode === 40) {
                // To prevent cursor from moving left or right in text input
                // You can only prevent it in keydown event
                // If you only use keyup then event already fired
                e.preventDefault();
            }
        });
    }
    
    handleSearch(e) {
        // check whether arrow keys are pressed using Loadash
        if(_.includes([37, 38, 39, 40, 13], e.keyCode) ) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                // To prevent cursor from moving left or right in text input
                e.preventDefault();
            }

            if (e.keyCode === 40 && this.state.posts == "") {
                // If post list is cleared and search input is not empty 
                // then call ajax again on down arrow key press 
                this.getFoods();
                return;
            }                
            // this.selectPost(e.keyCode);
        } else {
            this.getFoods();
        }
    }
    
    getFoods() {
        this.setState({search: this.refs.newSearch.value});

        if (this.state.search.trim() != '') {
            console.log(this.state.search);

            axios.get("/api/home/reactsearch/"+this.state.search)
            .then(
                response =>{
                    this.setState({foods: response.data.data});
                }
            ).catch( (error) => {
                console.log(error);
            });

        }
        if(this.state.foods!=0) console.log(this.state.foods[0].name);
    }
    
    // selectPost(keyCode) {
    // // If down arrow key is pressed
    // if (keyCode == 40 && this.state.count < this.state.posts.length) {
    //     this.setState((prevState) => ({ count : prevState.count + 1 }));
    // }
    // // If up arrow key is pressed
    // if (keyCode == 38 && this.state.count > 1) {
    //     this.setState((prevState) => ({ count : prevState.count - 1 }));
    // }
    // // If enter key is pressed
    // if (keyCode == 13) {
    //     // Go to selected post
    //     document.getElementById(this.state.count).childNodes[0].click();
    // }
    // }

    clearData(e) {
        if (e.target.id == 'search') {
            this.setState(() => ({ 
            foods: [],
            count: 0
            }));
        }
    }
    
    render() {
        if (this.state.foods != 0)
        {
            const ulStyle = {
                width : this.state.width + 'px'
            }
        
            const results = this.state.foods.map((result, index) => (
                <div id={index} key={result.id}
                    className={ (index === this.state.count) ? 'active menu-item-result' : 'menu-item-result'} 
                >
                    <a href="#" >
                    <div className="list_item_container" title={result.name}>
                        {/* <div className="image">
                            <img src={result.image} />
                        </div> */}
                        <div className="label-result">
                            <h4>{ result.name}</h4>
                            <h5>{ result.description}</h5>
                        </div>
                    </div>
                    </a>
                </div>
            ));

            return (
                <div>
                    <div className="row">
                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-8">
                            <br></br>
                            <input type="text" autoComplete="off" 
                                onChange={this.handleSearch}
                                id="search" ref="newSearch"  
                                className="form-control input-lg" 
                                placeholder="Search sth here..." 
                            />

                            {this.state.foods.length > 0 && 
                                <ul style={ulStyle} className="widget-result" >
                                {results}
                                </ul>
                            }
                        </div>

                        <div className="col-sm-2">
                        </div>

                    </div>
                </div>
            );
        } else return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                    </div>

                    <div className="col-sm-8">
                        <br></br>
                        <input type="text"
                            onChange={this.handleSearch}
                            id="search" ref="newSearch"  
                            className="form-control input-lg" 
                            placeholder="Search sth here..." 
                        />
                    </div>

                    <div className="col-sm-2">
                    </div>

                </div>
            </div>
        );
    }
}
    
if (document.getElementById('react-search')) {
    ReactDOM.render(<SearchArea />, document.getElementById('react-search'));
}
