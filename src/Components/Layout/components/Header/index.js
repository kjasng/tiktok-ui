import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { CircleX, Loader, Search } from 'lucide-react';

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} type="text" placeholder="Search account and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <CircleX size={14} />
                    </button>
                    <button className={cx('loading')}>
                        {/* <Loader size={14} /> */}
                    </button>
                    <button className={cx('search-btn')}>
                        <Search size={20} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;