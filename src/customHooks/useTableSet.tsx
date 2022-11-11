import { useState, useEffect } from 'react';
import { type_data } from '../dummy/dummy_data';

type Setting_data = {
    name : string,
    hint : string | null,
    type : string
}[];

export const useTableData = (param: string | null) => {
    const [setting_data, set_setting_data] = useState<Setting_data | null>(null);

    useEffect(()=>{
        return_func(param);
    }, []);

    const return_func = async (param: string | null) => {
        const result_data = type_data.filter(data => data.name === param);
        await set_setting_data(result_data);
    }

    return setting_data;
}