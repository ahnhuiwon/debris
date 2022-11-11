import { useTableData } from '../../customHooks/useTableSet';

interface HintProps {
    quarter : string;
}

const Hint = ({quarter}: HintProps) => {

    const setting = useTableData(quarter);

    return(
        <>
            <div className="col-md-12 table_wrap">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Hint</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{setting && setting[0].type}</td>
                            <td>{setting && setting[0].hint}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Hint;