import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state= {term:'',location:'',sortBy:'best_match'}
        this.sortByOptions = {
            'Best Match':'best_match',
            'Highest Rated':'rating',
            'Most Reviewed':'review_count'
        };
    }
    getSortByClass(sortByOption){
        if(sortByOption===this.state.sortBy){
            return 'active';
        }
        else{
            return '';
        }
        
    }
    handleSortByChanges(sortByOption){
        this.setState({sortBy:sortByOption});
    }
    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption=> {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key = {sortByOptionValue} onClick={this.handleSortByChanges.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
        });
    }
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Business" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href=" ">Let's Go</a>
                </div>
            </div>
        );
    }
}
export default SearchBar;