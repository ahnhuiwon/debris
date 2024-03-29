import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstView = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.onpopstate = () => {
            navigate('/block')
        };
    }, [navigate]);

    return(
        <>
            <div className="contents_wrap">
                <p>
                    예수께서 일어나사 거기를 떠나 두로 지방으로 가서
                    <br />
                    한 집에 들어가 아무도 모르게 하시려 하나 숨길 수 없더라. <br />
                    이에 더러운 귀신 들린 어린 딸을 둔 한 여자가 예수의 소문을 듣고 곧
                    와서 <br />
                    그 발아래에 엎드리니, 그 여자는 헬라인이요 수로보니게 족속이라 <br />
                    자기 딸에게서 귀신 쫓아내 주시기를 간구하거늘, <br />
                    예수께서 이르시되 자녀로 먼저 배불리 먹게 할지니 <br />
                    자녀의 떡을 취하여 개들에게 던짐이 마땅치 아니하니라. <br />
                    여자가 대답하여 이르되 주여 옳소이다마는 <br />
                    상 아래 개들도 아이들이 먹던 부스러기를 먹나이다. <br />
                    예수께서 이르시되 이 말을 하였으니 돌아가라 귀신이 네 딸에게서
                    나갔느니라 하시매, <br />
                    여자가 집에 돌아가 본즉 아이가 침상에 누웠고 귀신이 나갔더라. <br />
                </p>
            </div>
        </>
    )
}

export default FirstView;