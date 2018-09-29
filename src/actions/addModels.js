export const ADD_MODEL = "ADD_MODEL"


 export function addModel(pc) {
  return {
    type: ADD_MODEL,
    payload: pc
  }
}
