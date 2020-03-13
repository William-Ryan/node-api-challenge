import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchProjects = () => dispatch => {

    axios
        .get(`http://localhost:5000/api/projects`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        })
}