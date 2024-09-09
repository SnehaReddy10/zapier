import { ZapCellType } from '@/types/Zap';

export interface EditZapInputSchema {
  zap: any;
  zapType: ZapCellType;
  onEventSelect: (event: string, zapType: ZapCellType) => void;
  setShowEditZap: (show: boolean) => void;
  setShowModal: (show: ZapCellType) => void;
  setMetadata: (data: any, zapType: ZapCellType) => void;
}
