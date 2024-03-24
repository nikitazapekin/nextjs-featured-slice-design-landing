
import useTimer from "@/shared/lib/hooks/useTimer";
import "./index.scss"
const Timer = () => {
    const {  hours, minutes, seconds} = useTimer()
    return (
        <div className="timer">
            <p className="timer__title">
                Auction ends in:
            </p>
            <div className="timer__time">
                <div className="timer__time__block">
                    <p className="timer__time__title">
                       {hours}
                    </p>

                    <p className="timer__time__subtitle">
                        Hours
                    </p>
                </div>
                <div className="timer__time__block">
                    <p className="timer__time__title">
                        :
                    </p>
                </div>
                <div className="timer__time__block">
                    <p className="timer__time__title">
                      {minutes}
                    </p>
                    <p className="timer__time__subtitle">
                      Minutes
                    </p>
                </div>
                <div className="timer__time__block">
                    <p className="timer__time__title">
                        :
                    </p>
                </div>
                <div className="timer__time__block">
                    <p className="timer__time__title">
                       {seconds}
                    </p>
                    <p className="timer__time__subtitle">
                       Seconds
                    </p>
                </div>

            </div>
          
        </div>
    );
}

export default Timer;