import PropTypes from "prop-types";
import css from './ContactItem.module.css'
import stylesApp from '../../App.module.css'


const ContactItem = ({ id, name, number, onDeleteContact }) => {

    return (
      <>
        <div className={css.listAbonent}>
          <li className={css.item_contact}>
            <div className={css.text_contact}>
              <span className={css.span}>{name}: </span>
              <span className={css.spanNum}>{number}</span>
            </div>
            <button
              className={stylesApp.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        </div>
      </>
    );
}

export default ContactItem;


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};