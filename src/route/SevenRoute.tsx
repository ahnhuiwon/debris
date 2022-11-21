import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import SeventhView from "../component/view/SeventhView";
import SixthView from "../component/view/SixthView";

const SevenRoute = () => {

    const quarter :string = 'seventh';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <SeventhView />
            <BtnWrap />
        </>
    )
}

export default SevenRoute;