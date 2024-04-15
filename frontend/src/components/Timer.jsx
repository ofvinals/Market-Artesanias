import { useState, useEffect } from "react"
function Timer({ duration }) {
    const [time, setTime] = useState(duration)
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    const getDays = () => {
        let totalSeconds = parseInt(Math.floor(time / 1000))
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
        let totalHours = parseInt(Math.floor(totalMinutes / 60))
        let days = parseInt(Math.floor(totalHours / 24))

        let seconds = parseInt(totalSeconds % 60 )
        let minutes = parseInt(totalMinutes % 60)
        let hours = parseInt(totalHours % 24)

        return days
    }
    const getHours = () => {
        let totalSeconds = parseInt(Math.floor(time / 1000))
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
        let totalHours = parseInt(Math.floor(totalMinutes / 60))
        let days = parseInt(Math.floor(totalHours / 24))

        let seconds = parseInt(totalSeconds % 60 )
        let minutes = parseInt(totalMinutes % 60)
        let hours = parseInt(totalHours % 24)

        return hours
    }
    const getMinutes = () => {
        let totalSeconds = parseInt(Math.floor(time / 1000))
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
        let totalHours = parseInt(Math.floor(totalMinutes / 60))
        let days = parseInt(Math.floor(totalHours / 24))

        let seconds = parseInt(totalSeconds % 60 )
        let minutes = parseInt(totalMinutes % 60)
        let hours = parseInt(totalHours % 24)

        return minutes
    }

    const getSeconds = () => {
        let totalSeconds = parseInt(Math.floor(time / 1000))
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
        let totalHours = parseInt(Math.floor(totalMinutes / 60))
        let days = parseInt(Math.floor(totalHours / 24))

        let seconds = parseInt(totalSeconds % 60 )
        let minutes = parseInt(totalMinutes % 60)
        let hours = parseInt(totalHours % 24)

        return seconds
    }

    return (
        <div className="flex flex-row gap-2">
            <p className="text-general text-3tl font-bold bg-white rounded-[10px] flex w-[87px] h-20 justify-center items-center">{getDays(time)}</p>
            <p className="text-general text-3tl font-bold flex justify-center items-center ">:</p>
            <p className="text-general text-3tl font-bold bg-white rounded-[10px] flex w-[87px] h-20 justify-center items-center">{getHours(time)}</p>
            <p className="text-general text-3tl font-bold flex justify-center items-center ">:</p>
            <p className="text-general text-3tl font-bold bg-white rounded-[10px] flex w-[87px] h-20 justify-center items-center">{getMinutes(time)}</p>
            <p className="text-general text-3tl font-bold flex justify-center items-center ">:</p>
            <p className="text-general text-3tl font-bold bg-white rounded-[10px] flex w-[87px] h-20 justify-center items-center">{getSeconds(time)}</p>
        </div>
    )
}

export default Timer