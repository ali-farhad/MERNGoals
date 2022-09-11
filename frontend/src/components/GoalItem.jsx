import {React} from "react"
import Moment from 'react-moment';
import { BsClock } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import {deleteGoal} from "../features/goals/goalSlice"




function GoalItem({goal}) {
    const dispatch = useDispatch();

    let wow = Date.parse(goal.createdAt)
  return (
    <div className="goal">
        <div className="goalItem">
            <h3 className="goalItem"><BsClock className="x-2"/>  <Moment fromNow>{goal.createdAt}</Moment></h3>
        </div>
        <h2>{goal.text}</h2>
        <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
    </div>
  )
}

export default GoalItem