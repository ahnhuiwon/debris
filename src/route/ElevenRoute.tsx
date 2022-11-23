import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import ElevenView from "../component/view/ElevenView";

const ElevenRoute = () => {

    const quarter :string = 'eleven';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <ElevenView />
            <BtnWrap />
        </>
    )
}

export default ElevenRoute;