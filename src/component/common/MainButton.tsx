import { Link } from 'react-router-dom';

const MainButton = () => {
    return(
        <>
            <div className="start_btn_wrap">
                <Link to="/">
                    <button type="button" className="btn btn-outline-danger btn-lg">
                        MAIN
                    </button>
                </Link>
            </div>
        </>
    )
}

export default MainButton;