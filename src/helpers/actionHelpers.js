/**
 * Create action creation function
 * @param {String} type - action type
 */
export const createAction = type => payload => ({ type, payload });
