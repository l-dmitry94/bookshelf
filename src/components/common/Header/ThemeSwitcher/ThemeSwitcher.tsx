import scss from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
    return (
        <button className={scss.themeSwitcher}>
            <span className={scss.circle}></span>
        </button>
    );
};

export default ThemeSwitcher;
