export interface RecordModalState {
  isRecordOpen: boolean;
}

export enum RecordActionsEnum {
  OPEN_RECORD = "OPEN_RECORD",
  CLOSE_RECORD = "CLOSE_RECORD",
}

export interface SetRecordModalOpen {
  type: RecordActionsEnum.OPEN_RECORD;
  payload: boolean;
}

export interface SetRecordModalClose {
  type: RecordActionsEnum.CLOSE_RECORD;
  payload: boolean;
}

export type RecordModalAction = SetRecordModalOpen | SetRecordModalClose;
