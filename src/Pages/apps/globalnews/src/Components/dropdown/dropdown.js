import React, {useState} from 'react';
import "./dropdown.css"
import SearchBar from '../SearchBar/searchbar';
import LocalityCheckBox from '../LocalityCheckBox/checkbox';
import Settings from "../../Images/settings.png"
import CircledOne from "../../Images/one.png"
import { Grid } from '@material-ui/core';

const Dropdown = (props) => {

    const [dropdownStatus, setDropdownStatus] = useState(true)

 
    return (
        <Grid container   direction="column"
       > 
            <Grid item xs = {12} md = {12} style = {{width : '85%', margin: 'auto'}} >
               
                    <div className='toggle-filters-div'>
                        <h3 className='dropdown-label'> <img src = {CircledOne} className='numbers'/>Try Filters </h3> 
            
                        <img src = {Settings} alt ='activate filters dropdown menu' className= {dropdownStatus ? 'toggle-dropdwn-btn-on' : 'toggle-dropdwn-btn' }
                    />
                    </div>
                    
                        <section className={dropdownStatus ? 'dropdown-bubble' : 'hide'}>

                                <SearchBar typed = {props.typed}/> 

                                <LocalityCheckBox handleBoxClick = {props.handleBoxClick} checkboxState = {props.checkboxState}/>
                            
                            </section>

                
            </Grid>
        </Grid> 
 
    )
}


export default Dropdown;