import { useEffect, useState } from "react"

const ProgressBar = ({value = 0,onComplete}) =>{
    const [percent,setPercent] = useState(value)
    useEffect(()=>{
        if(value >= 100) onComplete()
        setPercent(Math.min(value,100))
        console.log(value,"value")
    },[value])
return(
    <div className="progress">
        <span style={{color:percent>49 ? '#fff' : '#000'}}>{percent.toFixed()}%</span>
        <div style={{transform:`scaleX(${value/100})`,transformOrigin:"left"}}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
        />
    </div>
)
}

export default ProgressBar