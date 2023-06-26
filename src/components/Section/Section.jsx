import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ section, title, children }) {
  return (
    <section className={section}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  section: PropTypes.string,
};
