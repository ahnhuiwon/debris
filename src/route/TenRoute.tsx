import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import TenView from "../component/view/TenView";

const TenRoute = () => {

    const quarter :string = 'ten';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <TenView />
            <BtnWrap />
        </>
    )
}

export default TenRoute;