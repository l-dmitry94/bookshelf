import { Loading } from 'notiflix';

export const LoaderOn = () => {
    Loading.custom({
        customSvgUrl: '/logo.svg',
    });
};

export const LoaderOff = () => {
    Loading.remove();
};
