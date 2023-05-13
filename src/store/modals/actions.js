export const OPEN_DELETE_MODAL = "OPEN_DELETE_MODAL";
export const ADD_USER_TO_DELETE = "ADD_USER_TO_DELETE";
export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL";

export function openDeleteModal(open) {
  return { type: OPEN_DELETE_MODAL, payload: open };
}

export function openEditModal(open) {
  return { type: OPEN_EDIT_MODAL, payload: open };
}

export function addUserToDelete(id) {
  return { type: OPEN_DELETE_MODAL, payload: id };
}
