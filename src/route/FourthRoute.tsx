import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import FourthView from "../component/view/FourthView";

const FourthRoute = () => {

    const quarter :string = 'third';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <FourthView />
            <BtnWrap />
        </>
    )
}

export default FourthRoute;