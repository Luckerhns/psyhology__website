import {
  RecordActionsEnum,
  RecordModalAction,
  RecordModalState,
} from "./recordModal";

export const initialState: RecordModalState = {
  isRecordOpen: false,
};

export const recordModalReducer = (
  state = initialState,
  action: RecordModalAction
) => {
  switch (action.type) {
    case RecordActionsEnum.OPEN_RECORD:
      return {
        ...state,
        isRecordOpen: true,
      };

    case RecordActionsEnum.CLOSE_RECORD:
      return {
        ...state,
        isRecordOpen: false,
      };
    default:
      return state;
  }
};
