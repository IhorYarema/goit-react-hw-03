import css from './SearchBox.module.css';

export default function SearchBox({ onFilter }) {
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="name">
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="name"
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
