import React from 'react';
import './SearchBar.css';
import { objectTypeSpreadProperty } from '@babel/types';

const sortByOptions = {
    'Best Match':'best_match',
    'Highest Rated':'review',
    'Most Reviewed':'review_count'
};

class SearchBar extends React.Component{
    renderSortByOptions(){
        return object.keys(sortByOptions).map(sortByOption=>{
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li>key = {sortByOptionValue}>{sortByOption}</li>
        });
    }
    render(){
        return (
            <div className="SearchBar">
                <div ClassName="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Business" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
export default SearchBar;