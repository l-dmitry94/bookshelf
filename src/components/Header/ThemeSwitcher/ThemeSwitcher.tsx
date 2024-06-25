import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
    return (
        <button className={css.switcherButton}>
            <span className={css.switcherCircle}></span>
        </button>
    );
};

export default ThemeSwitcher;
