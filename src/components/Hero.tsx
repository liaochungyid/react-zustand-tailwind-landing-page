import { ReactComponent as WatchPlayIcon } from '../images/icons/watchPlayIcon.svg'
import { ReactComponent as TextUnderscore } from '../images/icons/textUnderscore.svg'

function Hero() {
  return (
    <div className="flex flex-col items-center py-[120px]">
      <h1 className="max-w-[810px] font-lexend font-medium text-cool-gray-900 text-center text-[69px] leading-[81px] -tracking-[0.02em] dark:text-white-100">
        Accounting <span className="text-primary-light dark:text-primary-dark relative z-10">made simple
          <TextUnderscore viewBox="0 0 418 42" className="absolute -z-10 top-14 left-0 h-[42px] w-full" />
        </span> for small businesses.
      </h1>
      <h3 className="max-w-[600px] font-inter text-cool-gray-600 text-center text-[17px] leading-[30px] -tracking-[0.01em] mt-5 mb-10">
        Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
      </h3>
      <div className="flex flex-row gap-5">
        <button type='button' className="font-inter font-medium text-sm leading-[17px] text-white-100 bg-cool-gray-900 rounded-full px-5 py-4 dark:text-[#0F172A] dark:bg-white-100">Get 6 months free</button>
        <button type='button' className="font-inter font-medium text-sm leading-[17px] text-cool-gray-600 bg-white-100 rounded-full border px-5 py-4 border-cool-gray-200 flex flex-row flex-nowrap items-center gap-2.5 dark:text-cool-gray-600 dark:bg-primary-dark"><WatchPlayIcon />Watch video</button>
      </div>
    </div>
  );
}

export default Hero;
