import BtnWrap from "../component/common/BtnWrap";
import Header from "../component/common/Header";
import Hint from "../component/common/Hint";
import ThirdView from "../component/view/ThirdView";

const SecondRoute = () => {

    const quarter :string = 'second';

    return(
        <>
            <Header />
            <Hint quarter={quarter}/>
            <ThirdView />
            <BtnWrap />
        </>
    )
}

export default SecondRoute;