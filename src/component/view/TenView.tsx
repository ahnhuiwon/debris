import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import WordParts from "../common/WordParts";



const TenView = () => {

    const word_arr: string = "And this is the only immortality you and I may share, My Lolita.";
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const temp_arr = [...word_arr];
    const temp_alphabet = [...alphabet];
    var temp_flag = [false, false, false, false];

    const [change_arr, set_change_arr] = useState<string[]>([]);
    const [user_answer, set_user_answer] = useState<string>("");
    const [flag_arr, set_flag_arr] = useState<boolean[]>([]);
    const [count, set_count] = useState<number>(0);


    useEffect(()=>{
        set_change_arr(temp_arr);
    }, []);

    const user_click = (param: string) => {
        const arr_check = change_arr.includes(param.toLocaleLowerCase());
        arr_check ? set_user_answer(param) : check_wrong();
    }

    const check_wrong = () => {
        set_flag_arr([...flag_arr, true]);

        const check = flag_arr.filter( data => data === true).length;
        
        if(check > 3){
            window.location.reload();
        }
    }

    return(
        <>
            <div className="game-container" style={{color : "white"}}>
                <svg height="250" width="200" className="figure-container">
                    {/* rope */}
                    <line x1="60" y1="20" x2="140" y2="20" />
                    <line x1="140" y1="20" x2="140" y2="50" />
                    <line x1="60" y1="20" x2="60" y2="230" />
                    <line x1="20" y1="230" x2="100" y2="230"/>
                    {/* head */}
                    <circle cx="140" cy="70" r="20" className={ flag_arr[0] ? "figure-part-active" : "figure-part"} />
                    {/* body */}
                    <line x1="140" y1="90" x2="140" y2="150" className={ flag_arr[1] ? "figure-part-active" : "figure-part"} />
                    {/* arms */}
                    <line x1="140" y1="120" x2="120" y2="100" className={ flag_arr[2] ? "figure-part-active" : "figure-part"} />
                    <line x1="140" y1="120" x2="160" y2="100" className={ flag_arr[2] ? "figure-part-active" : "figure-part"} />
                    {/* legs */}
                    <line x1="140" y1="150" x2="120" y2="180" className={ flag_arr[3] ? "figure-part-active" : "figure-part"} />
                    <line x1="140" y1="150" x2="160" y2="180" className={ flag_arr[3] ? "figure-part-active" : "figure-part"} />
                </svg>
            </div>
            <div className="text_wrap">
                {
                    change_arr.map((data: any, answer: any)=>(
                        <div>
                            { data !== " " && <WordParts data={data.toLocaleLowerCase()} answer={user_answer.toLocaleLowerCase()} /> }
                        </div>
                    ))
                }
            </div>
            <div className="button_wrap">
                <div className="button_box">
                {
                    temp_alphabet.map((data, index)=>(
                        <Button variant="outline-danger" key={index}
                            onClick={()=>{ user_click(data) }}
                        >{data}</Button>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default TenView;