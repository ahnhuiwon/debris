import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import FifthView from "../component/view/FifthView";

const FifthRoute = () => {

    const quarter :string = 'fifth';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <FifthView />
            <BtnWrap />
        </>
    )
}

export default FifthRoute;