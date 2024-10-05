import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { CircleCheck } from "lucide-react";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/510706129ac85d548fdef210d7010cea~c5_300x300.webp?lk3s=a5d48078&nonce=35059&refresh_token=8809b992fb2297908b9d1e0f662c4262&x-expires=1728270000&x-signature=hfXlXYyDPJY0MjJysvGyq0VM3GU%3D&shp=a5d48078&shcp=c1333099" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Nguyen Van A
                    <span><CircleCheck className={cx('check')} size={16} /></span>
                </h4>
                <p className={cx('username')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;