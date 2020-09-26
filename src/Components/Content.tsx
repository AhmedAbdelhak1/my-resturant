import React from 'react';
import './Content.css';




function Content() {
    return (
        <div className="content"> 
            <form className="formclass">
                <input type="text" className="searcharea" placeholder="Search..."/>
                <button className="search-btn" type="button" >Search</button>
            </form>
        </div>
    )
}

export default Content;
