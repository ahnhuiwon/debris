import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import block_img from '../../style/img/block.jpg';

const BackBlock = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.onpopstate = () => {
            navigate('/block')
        };
    }, [navigate]);

    return(
        <>
            <div className="col-12 col-lg-12 block_page">
                <img src={block_img} />
                <p>There is no paradise where you run away...</p>
            </div>
        </>
    )
}

export default BackBlock;