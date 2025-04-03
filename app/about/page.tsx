'use client';

export default function About() {
  return (
    <div className="min-h-[85vh] flex flex-col md:flex-row border-b border-neutral-500 bg-black">
      <div className="flex-1 flex items-end">
        <span className="font-extrabold tracking-wide lg:text-[110px]">
          BUILT
          <br /> FOR REAL <br /> PERFORMANCE
        </span>
      </div>
      <div
        className="flex-1 border-l border-neutral-500 flex"
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/aHmupIkpNbiTWcrio0jHVxTg4OU.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
      >
        <div className="flex flex-col gap-2 m-4">
          <span className="font-bold text-neutral-600 md:text-xl">
            OUR MISSION
          </span>
          <p className="w-[300px] font-bold text-2xl">
            We craft considered essentials that embody the principles of
            thoughtful design, embracing the belief that our everyday garments
            should be as intentionally crafted as the spaces we inhabit.
          </p>
        </div>
      </div>
    </div>
  );
}
