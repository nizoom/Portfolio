import React, {useState} from 'react';
import "./dropdown.css"
import SearchBar from '../SearchBar/searchbar';
import LocalityCheckBox from '../LocalityCheckBox/checkbox';
import Settings from "../../Images/settings.png"
import CircledOne from "../../Images/one.png"

const Dropdown = (props) => {

    const [dropdownStatus, setDropdownStatus] = useState(false)

    function toggleDropdown(){
        console.log('toggling dropdown')
        setDropdownStatus(!dropdownStatus)
    }
    return (
        <div className='dropdown-wrapper'>
            <div className='toggle-filters-div'>
                <h3 className='dropdown-label'> <img src = {CircledOne} className='numbers'/>Try Filters (optional) </h3> 
     
                 <img src = {Settings} alt ='activate filters dropdown menu' className= {dropdownStatus ? 'toggle-dropdwn-btn-on' : 'toggle-dropdwn-btn' }
                 onClick={toggleDropdown}/>
            </div>
            
                   <section className={dropdownStatus ? 'dropdown-bubble' : 'hide'}>

                        <SearchBar typed = {props.typed}/> 

                        <LocalityCheckBox handleBoxClick = {props.handleBoxClick} status = {props.status}/>

                        <button className='close-filters-btn' onClick = {toggleDropdown}> Close </button>

                    </section>

        </div>
 
    )
}


export default Dropdown;