import { ZapCellType } from '@/types/Zap';

export interface EditZapFooterInputSchema {
  currentTab: number;
  eventSelected: boolean;
  selectedRecord: string;
  zapType: ZapCellType;
  metadata: string;
  setCurrentTab: (tabId: number) => void;
  setMetadata: (data: any, zapType: ZapCellType) => void;
}
