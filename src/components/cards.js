export default function Cards() {
  return (
    <div className="grid h-1/2 grid-cols-4 place-items-center">
      <div className="grid grid-cols-4 col-span-4 space-x-4">
        <div className={`text-black shadow-2xl bg-ldgray py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Release Confidently
          </h1>
        </div>
        <div className={`text-black shadow-2xl bg-ldgray py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Improve Reliability
          </h1>
        </div>
        <div className={`text-black shadow-2xl bg-ldgray py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Safely Migrate Services
          </h1>
        </div>
        <div className={`text-black shadow-2xl bg-ldgray py-5`}>
          <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">
            Automate DevOps Workflows
          </h1>
        </div>
      </div>
    </div>
  );
}
