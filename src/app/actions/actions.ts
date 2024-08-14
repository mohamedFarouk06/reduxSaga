export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UNDO_ACTION = 'UNDO_ACTION';
export const REDO_ACTION = 'REDO_ACTION';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const undoAction = () => ({ type: UNDO_ACTION });
export const redoAction = () => ({ type: REDO_ACTION });
