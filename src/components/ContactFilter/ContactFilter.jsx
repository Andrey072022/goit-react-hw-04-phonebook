import PropTypes from "prop-types";
import css from './ContactFilter.module.css';
import stylesApp from '../../components/App.module.css';

const ContactFilter = ({value, onChange}) => {
  return (
    <div className={css.filter_wrapper}>
      <label className={stylesApp.label_input}>
        Filter
        <input
          className={stylesApp.field}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );  
};
export default ContactFilter;


  ContactFilter.propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
};