import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import NineView from "../component/view/NineView";

const NineRoute = () => {

    const quarter :string = 'nineth';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <NineView />
            <BtnWrap />
        </>
    )
}

export default NineRoute;