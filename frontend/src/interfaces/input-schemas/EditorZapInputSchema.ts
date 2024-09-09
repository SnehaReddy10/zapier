import { ZapCellType, Action, Trigger } from '@/types/Zap';

export interface EditorZapInputSchema {
  type: ZapCellType;
  action?: Action;
  trigger?: Trigger;
  index: number;
  addAction: (index: number) => void;
  onClick: (type: ZapCellType) => void;
}
