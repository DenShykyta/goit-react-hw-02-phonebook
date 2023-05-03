import PropTypes from "prop-types";
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
<label className={css.filter__text}> Find contacts by name
    <input className={css.filter__input} type='text' placeholder="Type name" value={value} onChange={onChange}></input>
    </label>
    )
    
    
}


export default Filter;

Filter.popTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}