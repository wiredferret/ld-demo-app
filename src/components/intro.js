export default function Intro () {
return (
    <div className="grid h-1/2 grid-cols-4 place-items-center">
      <div className="grid grid-cols-4 col-span-4 space-x-4">
        <div className={`App-fade text-black shadow-2xl bg-ldgray border-ldred border-2 px-8 py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Build
          </h1>
        </div>
        <div className={`App-fade text-black shadow-2xl bg-ldgray border-ldblue border-2 px-8 py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Push
          </h1>
        </div>
        <div className={`App-fade text-black shadow-2xl bg-ldgray border-ldyellow border-2 px-8 py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Deploy
          </h1>
        </div>
        <div className={`App-fade text-black shadow-2xl bg-ldgray border-ldpurple border-2  px-8 py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Consume
          </h1>
        </div>
      </div>
    </div>
)
}