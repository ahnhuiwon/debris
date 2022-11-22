import { useEffect, useState } from "react";

type WordProps = {
    data : string,
    answer : string
}

const WordParts = ({data, answer}:WordProps) => {

    const [word_flag, set_word_flag] = useState<boolean>(false);

    useEffect(()=>{
        if(!word_flag){
            data === answer && set_word_flag(true);
        }
    }, [answer]);

    
    return(
        <p className={ word_flag ? "active" : ""}>{ word_flag ? data : ''}</p>
    )
}

export default WordParts;