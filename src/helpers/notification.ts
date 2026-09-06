import { Notify } from 'notiflix';

type Status = 'success' | 'failure' | 'warning' | 'info';

const notify = (type: Status, message: string) => {
    return Notify[type](message);
};

export default notify;
