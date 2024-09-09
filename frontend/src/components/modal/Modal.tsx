import { getAvailableActions } from '@/api/actions';
import { ZapCellType } from '@/types/Zap';
import { useEffect, useState } from 'react';
import Loader from '../utils/loaders/Loader';
import { getAvailableTriggers } from '@/api/triggers';
import { ModalAppBar } from './ModalAppBar';
import { ModalSearchbar } from './ModalSearchbar';

function Modal({
  type,
  onSelect,
  index,
}: {
  type: ZapCellType;
  onSelect: (e: any, zapType: ZapCellType) => void;
  index: number;
}) {
  const [availableActions, setAvailableActions] = useState<any>([]);
  const [availableTriggers, setAvailableTriggers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let result;
    if (type == ZapCellType.action) {
      result = getAvailableActions();
      result.then((data: any) => {
        if (data.success) {
          setAvailableActions(data.availableActions);
          setLoading(false);
        }
      });
    } else {
      result = getAvailableTriggers();
      result.then((data: any) => {
        if (data.success) {
          setAvailableTriggers(data.availableTriggers);
          setLoading(false);
        }
      });
    }
  }, []);
  return (
    <div className="bg-gray-90 text-xxxs rounded-sm shadow-sm shadow-white w-1/3">
      <ModalSearchbar />
      <ModalAppBar />
      <div className="py-2 px-4">
        {loading && <Loader />}
        {(!loading && type == 1 && (
          <div className="p-1">
            <p className="font-semibold text-gray-400 py-1">Your top apps</p>
            {availableActions.map((x: any) => (
              <div
                onClick={() => {
                  onSelect({ ...x, index }, type);
                }}
                className="flex gap-2 items-center font-semibold py-2 my-2"
                key={x.id}
              >
                <img src={x.image} alt="" className="w-3 h-2" />
                <p>{x.action}</p>
              </div>
            ))}
          </div>
        )) ||
          (type == 0 &&
            availableTriggers.map((x: any) => (
              <div
                onClick={() => {
                  onSelect({ ...x, index }, type);
                }}
                className="flex gap-2 items-center font-semibold py-2 my-2"
                key={x.id}
              >
                <img src={x.image} alt="" className="w-4 h-3" />
                <p>{x.trigger}</p>
              </div>
            )))}
      </div>
    </div>
  );
}

export default Modal;
