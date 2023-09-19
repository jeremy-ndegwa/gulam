import { useEffect, useState} from "react"

function ShowAge(){
    const [age, setage]=useState(20)

    //change age 
    const changeAge = ()=>{
        setage(age + 1)
    }

    //use effect example file
    useEffect(()=>{
    console.log(`my age is now ${age}`);
    },[age])

    return(
        <>
        <div>
            <p>this is your age now {age}</p>
            <button onClick={changeAge}>Click to change age</button>
        </div>
    </>
    )

}

export default ShowAge