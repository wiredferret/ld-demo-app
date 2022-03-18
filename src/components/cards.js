export default function Cards() {
return (
<div className="grid h-1/2 grid-cols-4 place-items-center">
            <div className="grid grid-cols-4 col-span-4 space-x-4">
          <div className={`text-ldyellow shadow-2xl bg-ldgray py-5`}>
            <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">Control Feature Releases</h1>
            {/* <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Use LaunchDarkly to deliver new features faster through feature flags. Toggle on features, and ship faster!
            </p> */}
          </div>
          <div className={`text-ldyellow shadow-2xl bg-ldgray py-5`}>
            <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">Kill-switch Problem Code</h1>
            {/* <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Don't get stuck waiting for a redeploy. Disable problem code immediately when it's discovered.
            </p> */}
          </div>
          <div className={`text-ldyellow shadow-2xl bg-ldgray py-5`}>
            <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">Target Features to Users </h1>
            {/* <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Target changes only where you want them to happen. Users, teams, devices, or geographies. The possibilities are endless!
            </p> */}
          </div>
          <div className={`text-ldyellow shadow-2xl bg-ldgray py-5`}>
            <h1 className="text-5xl sm:text-base xl:text-3xl 2xl:text-4xl my-5">Migrate Services and Databases</h1>
            {/* <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Deliver new configurations to apps via Feature Flags. Migrate to new databases or services.
            </p> */}
          </div>
          </div>
        </div>
)
}