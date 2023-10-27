import { useState ,forwardRef} from "react";
import images from "../../assets/images";
import styles from "./Image.module.scss"
import classNames from "classnames";

function Image({ src, alt, className, fallback, ...props },ref) {
    const [errorSrc, setErrorSrc] = useState(src)
    
    
    

    const handeleError = (e) => {
        const _fallback = fallback || images.noImage
        setErrorSrc(_fallback)
    }
    return (<img className={classNames(styles.wrapper,className)} ref={ref} {...props} src={errorSrc} alt={alt ? alt : "No Image"} onError={handeleError} />);
}

export default forwardRef(Image);