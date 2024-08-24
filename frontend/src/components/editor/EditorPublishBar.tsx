export function EditorPublishBar({ canPublish }: { canPublish: boolean }) {
  return (
    <div className="flex flex-1 rounded-ss-xl justify-between items-center h-max px-2 py-1 text-xxxs bg-white border-b-[1px] border-gray-300">
      <div className="relative cursor-not-allowed">
        <div className="bg-gray-400 rounded-full w-6 h-3"></div>
        <div className="absolute inset-0 top-[2px] left-[2px] bg-gray-300 rounded-full w-[14px] h-[14px]"></div>
      </div>
      <div
        className={`${
          canPublish
            ? 'bg-purple-700 cursor-pointer'
            : 'cursor-not-allowed bg-gray-400'
        } px-1 py-[2px] rounded-sm text-white`}
      >
        Publish
      </div>
    </div>
  );
}
