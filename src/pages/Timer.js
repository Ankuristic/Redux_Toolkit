import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import {start_Timer,pause_Timer,reset_Timer,increment_Timer} from "../redux/reducers/counterReducer"

export const Timer = () => {
  return (
    <div className="page">
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
