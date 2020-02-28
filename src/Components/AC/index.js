import {DELETE_COMMENT} from "../../constans"

export function deleteComment (id) {
    return ({
      type: DELETE_COMMENT,
      payload:{id}
    })
}