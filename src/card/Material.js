import React from "react";


const data = [
    {
        nameAR: "المملكة العربية السعودية",
        nameEN: "Saudi Arabia",
        id: "5c24dc26dc10670017e40921",
        createdAt: "2020-06-10T19:51:40.452Z",
        updatedAt: "2020-06-10T19:51:40.452Z"
    },
    {
        nameAR: "مصر",
        nameEN: "egypt",
        id: "5d8b1de47c213e556135d9d2",
        createdAt: "2020-06-10T19:51:40.453Z",
        updatedAt: "2020-06-10T19:51:40.453Z"
    }
]
console.log(data)

const Material = (props) => {

        
    console.log(props.data)
    return (
        <table border="1" cellspacing="0" cellpadding="0" >
                        
            <tbody>
                            <tr >
                                <th>nameAR</th>
                                <th>nameEN</th>
                                <th>id</th>
                                <th>createdAt</th>
                                <th>updatedAt</th>
                </tr>
                {props.data.map((dt) => {
                    return (
                        <tr>
                            <td>{dt.nameAR}</td>
                            <td>{dt.nameEN}</td>
                            <td>{dt.id}</td>
                            <td>{dt.createdAt}</td>
                            <td>{dt.createdAt}</td>

                        </tr>
                    )
                })}
                            


                    
                        </tbody>
                </table> 
                            
            
        );
    
}

export default Material
