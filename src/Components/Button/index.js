import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({ to, href, children, onClick, size, primary = false, className, ...passProps }) {
    let Comp = 'button'
    const _props = {
        onClick,
        className,
        ...passProps
    }
    if (to) return <Link to={to} className={cx('wrapper', primary, className, size)}>{children}</Link>
    if (href) return <a href={href} className={cx('wrapper', primary, className, size)}>{children}</a>

    return (
        <Comp className={cx('wrapper', className, size, primary)} {..._props}>
            {children}
        </Comp>
    )
}

export default Button;