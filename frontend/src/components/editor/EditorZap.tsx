'use client';

import { useState } from 'react';
import AddButton from '../utils/buttons/AddButton';
import { ZapCellType } from '@/types/Zap';
import { EditorZapInputSchema } from '@/interfaces/input-schemas/EditorZapInputSchema';
import { EmptyZap } from './ShowEmptyZap';
import { PopulatedZap } from './PopulatedZap';

function EditorZap({
  type,
  action,
  trigger,
  index,
  addAction,
  onClick,
}: EditorZapInputSchema) {
  const [showMoveIcon, setShowMoveIcon] = useState(false);

  const handleMouseInAndOut = () =>
    (action?.action || trigger) && setShowMoveIcon((m) => !m);

  return (
    <div className="flex gap-2">
      <div
        className="flex flex-col items-center"
        onMouseEnter={handleMouseInAndOut}
        onMouseLeave={handleMouseInAndOut}
      >
        {type == ZapCellType.action && (
          <div className="bg-gradient-to-b from-[#5140bf] via-[#5140bf] to-white h-6 w-[2px]"></div>
        )}

        {!action?.action && !trigger && (
          <EmptyZap
            onClick={onClick}
            type={type}
            showMoveIcon={showMoveIcon}
            index={index}
          />
        )}

        {(action?.action || trigger) && (
          <PopulatedZap
            onClick={onClick}
            type={type}
            showMoveIcon={showMoveIcon}
            index={index}
            trigger={trigger}
            action={action}
          />
        )}

        <div className="bg-gradient-to-t from-[#5140bf] via-[#5140bf] to-white h-6 w-[2px]"></div>
        <AddButton
          onClick={() => {
            addAction(index + 1);
          }}
        />
      </div>
    </div>
  );
}

export default EditorZap;
