import scss from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
    return (
        <div className={scss.switcher}>
            <span className={scss.cirlce}></span>
        </div>
    );
};

export default ThemeSwitcher;
