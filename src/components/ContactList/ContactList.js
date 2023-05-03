import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDel }) {
  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contacts__item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={css.contacts__btn} onClick={() => onDel(id)}>
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.popTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDel: PropTypes.func.isRequired,
};
