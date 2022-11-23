import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import MainButton from "../component/common/MainButton";
import BackBlock from "../component/view/BackBlock";
import EighthView from "../component/view/EighthView";

const BlockRoute = () => {

    const quarter :string = 'eighth';

    return(
        <>
            <Header />
            <BackBlock />
            <MainButton />
        </>
    )
}

export default BlockRoute;