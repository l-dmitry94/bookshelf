import Books from '@/components/features/Books';
import Categories from '@/components/features/Categories';
import Foundations from '@/components/features/Foundations';
import Container from '@/components/ui/Container';

import scss from './HomePage.module.scss';

const HomePage = () => {
    return (
        <section className={scss.home}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.leftWrapper}>
                        <Categories />
                        <Foundations />
                    </div>

                    <Books />
                </div>
            </Container>
        </section>
    );
};

export default HomePage;
