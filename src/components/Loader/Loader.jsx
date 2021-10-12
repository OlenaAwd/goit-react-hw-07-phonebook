import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from "./Loader.module.css";

export default function Loader() {
    return(
        <div className={css.wrap}>
            <Loader
            type="Circles"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
            />
    </div>
    )
}