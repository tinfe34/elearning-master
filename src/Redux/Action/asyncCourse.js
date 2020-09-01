
import { courseService } from "../../Services"
import { createAction } from "./Action"
import { DATA_COURSE } from "./Constans"

export const asyncFechCourse = () =>{
    return (dispatch) => {
        courseService.FechCourse().then((res)=>{
           dispatch(createAction(DATA_COURSE,res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

