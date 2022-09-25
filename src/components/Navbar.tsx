import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as SearchIcon } from '../images/icons/searchIcon.svg';

import useSearchbar from '../store/searchbar'
import useDarkMode from '../store/darkmode'

function Navbar() {
  const isDarkMode = useDarkMode(state => state.isDarkMode);
  const toggleThemeMode = useDarkMode(state => state.toggleThemeMode);
  const toggleSearchBar = useSearchbar(state => state.toggleSearchBar);

  return (
    <header className="relative flex flex-row flex-nowrap items-center justify-between w-full max-w-7xl px-12 py-9">
      {/* left part */}
      <div className="flex flex-row flex-nowrap items-center gap-9">
        <div className='h-10 pr-4 dark:logo-dark'>
          <Logo />
        </div>
        <a href="/" className="text-cool-gray-600 font-inter dark:text-dark-cool-gray-600">Features</a>
        <a href="/" className="text-cool-gray-600 font-inter dark:text-dark-cool-gray-600">Testimonials</a>
        <a href="/" className="text-cool-gray-600 font-inter dark:text-dark-cool-gray-600">Pricing</a>
      </div>

      {/* right part */}
      <div className="flex flex-row flex-nowrap items-center">

        {/* search box */}
        <button type='button' 
          className="cursor-text flex flex-row flex-nowrap items-center justify-between w-[202px] h-9 rounded-lg bg-[#231F20]/50 pl-5 pr-4 dark:bg-[#78FFF7]/50"
          onClick={toggleSearchBar}
        >
          <div className='dark:search-icon-dark'>
            <SearchIcon />
          </div>
          <span className='text-white-60 font-robot text-xs dark:text-dark-white-60'>⌘ + K</span>
        </button>

        {/* sign in button */}
        <button type='button' className='ml-5 mr-8 text-cool-gray-600 font-inter dark:text-dark-cool-gray-600' onClick={() => {}}>Sign in</button>

        {/* cta buttton */}
        <button type='button' className='bg-primary-light text-white-100 font-inter font-medium text-sm rounded-full px-3.5 py-3 dark:bg-primary-dark dark:text-dark-white-60' onClick={() => {}}>Get started today</button>
      </div>

      {/* theme mode indicator */}
      <button type='button' className='absolute top-0 -right-1.5 h-full flex flex-row items-center' onClick={toggleThemeMode}>
        <img src={isDarkMode ? "/darkModeIcon.png" : "/lightModeIcon.png"} width="30px" height="30px" alt="" />
      </button>
    </header>
  );
}

export default Navbar;
