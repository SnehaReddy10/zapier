export type Zap = {
  title: string;
  actions: ActionType[];
  lastEdit: Date;
  running: boolean;
};

export const enum ActionType {
  NOTION,
  GMAIL,
}
