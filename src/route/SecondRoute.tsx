import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import SecondView from "../component/view/SecondView";

const SecondRoute = () => {

    const quarter :string = 'first';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <SecondView />
            <BtnWrap />
        </>
    )
}

export default SecondRoute;