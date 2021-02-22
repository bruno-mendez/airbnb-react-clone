import React, {useState} from 'react';
import './Search.css'
import { DateRangePicker} from "search-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

//Date picker component

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)

    }

    return (
        <div className='search'>
            <DateRangePicker 
            ranges={[selectionRange]} 
            onChange={this.handleSelect}
            />
        </div>
    )
}

export default Search
