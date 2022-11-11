import playground from '../../style/img/playground.jpg';

const table_data = [
    'T','H', 'R', 'E','W', 'O', 'N', 'L', 'V'
];

const FifthView = () => {

    return(
        <div className="col-12 col-lg-12 fifth_contents_wrap">
            <p>THREE + THREE + TWO + TWO + ONE = ELEVEN</p>
            <table>
                <thead>
                    <tr>
                        {
                            table_data.map((data, index)=>(
                                <th key={index} scope="col">{data}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        table_data.map((data, index)=>(
                            <th key={index} scope="col">?</th>
                        ))
                    }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FifthView;