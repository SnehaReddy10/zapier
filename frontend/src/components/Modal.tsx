import { getAvailableActions } from '@/api/actions';
import { ZapCellType } from '@/types/Zap';
import { useEffect, useState } from 'react';

function Modal({ type }: { type: ZapCellType }) {
  const [availableActions, setAvailableActions] = useState<any>([]);
  const [availableTriggers, setAvailableTriggers] = useState([]);

  useEffect(() => {
    const result = getAvailableActions();
    result.then((data: any) => {
      if (data.success) {
        setAvailableActions(data.availableActions);
      }
    });
  }, []);
  return (
    <div className="bg-[#fffdf9] rounded-sm shadow-sm shadow-white">
      {type == 1 &&
        availableActions.map((x: any) => <div key={x.id}>{x.action}</div>)}
      {type == 0 &&
        availableTriggers.map((x: any) => <div key={x.id}>{x.action}</div>)}
    </div>
  );
}

export default Modal;
