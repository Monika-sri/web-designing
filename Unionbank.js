import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {

    let initialData={
        name:"Gowri",
        name1:"Alekya",
        age:18
    }
    return (
        <div>
            <Andhrabank location="Guntur" data={initialData}/>

            <Corporationbank location="Kakinada" data={initialData} />
            

        </div>
    )
}
