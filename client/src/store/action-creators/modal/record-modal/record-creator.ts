import {
  RecordActionsEnum,
  SetRecordModalClose,
  SetRecordModalOpen,
} from "./recordModal";

export const RecordActionCreators = {
  openRecordModal: (): SetRecordModalOpen => ({
    type: RecordActionsEnum.OPEN_RECORD,
    payload: true,
  }),

  closeRecordModal: (): SetRecordModalClose => ({
    type: RecordActionsEnum.CLOSE_RECORD,
    payload: false,
  }),
};
