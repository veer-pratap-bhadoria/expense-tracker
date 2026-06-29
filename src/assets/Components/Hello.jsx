import React from 'react'

function Hello() {
    // const muthDays = ["monday", "wednesday", "thursday", "friday", "sunday"]
    const person = [
        {
            name: "robert",
            age: 36,
            email: "someth@gmail.com"
        },


        {
            name: "downy",
            age: 14,
            email: "someth@gmail.com"
        },



        {
            name: "lulu",
            age: 26,
            email: "someth@gmail.com"
        },



        {
            name: "pappu",
            age: 16,
            email: "someth@gmail.com"
        },
    ]
    return (
        <div className='raand'>
            {person.map((admi)=>(
                <div className='raand'>
                    <span>Name: {admi.name}</span>
                    <span>
                       Adult: {admi.age > 18 ? "yes" : "no"}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Hello