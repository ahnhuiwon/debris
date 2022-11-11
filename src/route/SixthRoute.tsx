import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import SixthView from "../component/view/SixthView";

const SixthRoute = () => {

    const quarter :string = 'sixth';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <SixthView />
            <BtnWrap />
        </>
    )
}

export default SixthRoute;