import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import EighthView from "../component/view/EighthView";

const EightRoute = () => {

    const quarter :string = 'eighth';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <EighthView />
            <BtnWrap />
        </>
    )
}

export default EightRoute;