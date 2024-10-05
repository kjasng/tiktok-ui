import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { CircleX, Loader, Search, X } from 'lucide-react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)


function Header() {

    const [searchResult, setSearchResult] = useState([])



    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />

                                </PopperWrapper>
                            </div>
                        )
                    }}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            type="text"
                            placeholder="Search account and videos"
                            spellCheck={false}
                            onChange={(e) => {
                                setSearchResult(e.target.value)
                            }}
                        />
                        <button className={cx('clear')}>
                            <X size={14} />
                        </button>
                        <button className={cx('loading')}>
                            {/* <Loader size={14} /> */}
                        </button>

                        <button className={cx('search-btn')}>
                            <Search size={20} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;