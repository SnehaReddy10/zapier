import { findNewRecords } from '@/api/triggers';
import { useState, useEffect } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { LiaDotCircle } from 'react-icons/lia';
import Search from '../Search';
import ZapUrlButton from '../buttons/ZapUrlButton';
import SecondaryButton from '../buttons/SecondaryButton';

export function TestTrigger({ triggerId }: { triggerId: string }) {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(0);
  const [selectedPayload, setSelectedPayload] = useState<any>({});

  const handleFindNewRecords = async () => {
    const result = await findNewRecords(triggerId);
    if (result.success) {
      setRecords(result.records);
    }
  };

  useEffect(() => {
    handleFindNewRecords();
  }, [triggerId]);

  useEffect(() => {
    if (selectedRecord < records.length) {
      const i: any = records[selectedRecord];
      const payload = JSON.parse(i.payload);
      setSelectedPayload(payload);
    }
  }, [selectedRecord, records]);

  return (
    <div className="m-4 flex flex-col gap-4 overflow-y-scroll h-72">
      <div className="flex flex-col gap-1 p-4 text-center items-center bg-blue-100">
        <h1 className="text-lg font-bold">Your webhook URL</h1>
        <p className="text-xs text-gray-60">
          You’ll need to configure your application with this Zap’s webhook URL.
        </p>
        <ZapUrlButton />
        <p className="text-justify">
          We‘ve generated a custom webhook URL for you to send requests to. You
          can add silent/ if your application prefers getting an empty response.
          Learn more about using webhooks.
        </p>
      </div>

      <div className="flex gap-2">
        <IoCheckmarkCircle fill="green" size={60} />
        <div className="flex flex-col gap-1">
          <p>
            We found records in your Webhooks by Zapier account. We will load up
            to 3 most recent records, that have not appeared previously.
          </p>
          <a href="" className="underline text-blue-500">
            Learn more about test records
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Search
          selectedItem={undefined}
          placeHolder="Search"
          setShowEvents={() => {}}
        />
        <div className="flex border-[1px] border-blue-500 w-full">
          <div className="flex flex-col gap-1">
            {records.map((x: any, index) => {
              return (
                <div
                  onClick={() => setSelectedRecord(index)}
                  key={x.id}
                  className={`flex gap-1 p-1 items-center justify-center ${
                    selectedRecord == index ? 'bg-purple-50' : ''
                  }`}
                >
                  <LiaDotCircle size={20} />
                  <p>Request {index}</p>
                </div>
              );
            })}
            <p className="border-t-[1px] border-blue-500">
              <SecondaryButton
                className="m-1"
                text={'Find new records'}
                onClick={() => handleFindNewRecords()}
              />
            </p>
          </div>
          <div className="flex flex-1 border-l-[1px] border-blue-500 p-2 overflow-x-scroll">
            <div className="flex flex-col gap-1 flex-1">
              {Object.keys(selectedPayload).map((y, index) => {
                return (
                  <div className="flex gap-1" key={index}>
                    <p className="bg-purple-50 px-1 py-[2px]">{y}</p>{' '}
                    <p>{selectedPayload[y]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
