export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto p-10 flex flex-col space-y-8">
        <div className="w-1/3 aspect-video bg-black">
          <video
            className="w-full h-full"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          ></video>
        </div>

        <div className="w-1/3 aspect-[4/3] bg-black">
          <video
            className="w-full h-full"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          ></video>
        </div>

        <div className="w-1/3 bg-black">
          <div className="w-full h-0 pb-[75%] relative">
            <div className="absolute inset-0">
              <video
                className="w-full h-full"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
