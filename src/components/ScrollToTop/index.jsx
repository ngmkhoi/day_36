import {useLocation} from "react-router";
import {useEffect} from "react";


function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Thêm hiệu ứng mượt
        });
    }, [pathname])

    return null
}

export default ScrollToTop;