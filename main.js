/**
 * The main js file has links the page and the components.
 * 
 */
//Search component
import {SearchContent} from './componentUI/SearchUI/Search.js'

let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', ()=>{

      SearchContent();

});