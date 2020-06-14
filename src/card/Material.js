import React from "react";
import { type } from "os";


const data = [
    {
        nameAR: "المملكة العربية السعودية",
        nameEN: "Saudi Arabia",
        id: "5c24dc26dc10670017e40921",
        //createdAt: "2020-06-10T19:51:40.452Z",
        //updatedAt: "2020-06-10T19:51:40.452Z"
    },
    {
        nameAR: "مصر",
        nameEN: "egypt",
        id: "5d8b1de47c213e556135d9d2",
        createdAt: "2020-06-10T19:51:40.453Z",
        updatedAt: "2020-06-10T19:51:40.453Z"
    }, {
        hi: "hi"
    }
]



//const arr = [{ x: 1, y: 2 }, { x: 5, y: 4 }, { x: 1, y: 2, z: 3 }];

const Material = (props) => {
    //const {data}= props

    function getValue(obj, key) {
        return obj[key];
    }
    const keys = [...new Set([].concat.apply([], props.data.map(obj => Object.keys(obj))))];
    
  

    for (let i = 0, j = 0; i < props.data.length && j < 10; i++, j++) {

        const kee = Object.keys(props.data[i])
        console.log(kee)
        const keeStr = kee.toString();
        console.log(keeStr)
        for (let j = 0; j < kee.length; j++) {
            const keyString = keeStr.match(kee[j])[0]
            console.log(keyString)
            console.log(getValue({ ...props.data[0] }, keyString))
        }
    } 
   
    return (
        <table border="1" cellspacing="0" cellpadding="0" >

            <tbody>
                <tr>
                    {keys.map((key) => {
                        return (
                            <th>{key}</th>
                        )
                    })}
                </tr>
                {props.data.map((dt) => {
                return (
                        console.log(dt)
                )
                })}




            </tbody>
        </table>


    );

}

export default Material
