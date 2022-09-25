import React from 'react';
import { ReactComponent as SearchIcon } from '../images/icons/searchIcon.svg';
import { ReactComponent as GmailIcon } from '../images/icons/gmailIcon.svg';
import { ReactComponent as GoogleAssistantIcon } from '../images/icons/googleAssistantIcon.svg';
import { ReactComponent as CreateIcon } from '../images/icons/createIcon.svg';
import { ReactComponent as OpenNewIcon } from '../images/icons/openNewIcon.svg';
import { ReactComponent as ReturnIcon } from '../images/icons/returnIcon.svg';

import useSearchbar from '../store/searchbar'

function SearchBox() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleSearchBar = useSearchbar(state => state.toggleSearchBar);
  const isSearchBarOpen = useSearchbar(state => state.isSearchBarOpen);


  React.useEffect(() => {
    const handleCtrlAndK = (e: KeyboardEvent) => {
      if (e.isTrusted && 
        (e.key === "K" || e.key === "k") &&
        !(e.altKey || e.shiftKey) &&
        e.ctrlKey
      ) {
        e.preventDefault();
        toggleSearchBar();
      };
    };

    document.addEventListener('keydown', handleCtrlAndK)

    return () => document.removeEventListener('keydown', handleCtrlAndK)
  });

  React.useEffect(() => {
    if (isSearchBarOpen) inputRef.current?.focus();
  }, [isSearchBarOpen])

  return (
    <div className={`absolute top-0 left-0 w-full h-full flex-row items-start justify-center pt-[146px] bg-white-50 ${isSearchBarOpen ? 'flex' : 'hidden'}`} onClick={toggleSearchBar}>
      <div className='bg-[#000000]/50 rounded-lg overflow-hidden drop-shadow-[8px_16px_64px_rgba(0,0,0,0.48)] backdrop-blur' onClick={(e) => e.stopPropagation()}>
        {/* input field */}
        <div className='w-[480px] flex flex-row flex-nowrap items-center bg-[#000000]/25 rounded-t-lg pl-6 pr-7 py-5 gap-3'>
          <div>
            <SearchIcon />
          </div>
          <input type="text" list='' ref={inputRef} placeholder='Email' autoComplete='off' onChange={(e) => e.target.value ? !showDropdown && setShowDropdown(true) : showDropdown && setShowDropdown(false)}
            className='grow w-full caret-white-100 bg-transparent font-roboto font-light text-2xl leading-8 text-white-100 placeholder:text-white-60' />
          <span className='text-white-60 font-robot text-xs whitespace-nowrap dark:text-dark-white-60'>⌘ + F</span>
        </div>

        {/* drop down */}
        <ul className={` search-list  ${showDropdown ? 'h-[216px]' : 'h-0'}`}>
          <li className='group'><GmailIcon />Gmail — Inbox<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><GoogleAssistantIcon />Ask Google Assistant<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><CreateIcon />Create new draft — rob@getblock.co<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><CreateIcon />Create new draft — joe@getblock.co<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><OpenNewIcon />“New lithium-ion battery” — elon@tesla.com<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><OpenNewIcon />“Re: AWS partnership” — jeff@amazon.com<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><OpenNewIcon />“reworked search algorithm” — larry@abc.xyz<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><GmailIcon />Gmail — Inbox<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><GoogleAssistantIcon />Ask Google Assistant<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><CreateIcon />Create new draft — rob@getblock.co<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><CreateIcon />Create new draft — joe@getblock.co<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><OpenNewIcon />“New lithium-ion battery” — elon@tesla.com<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><OpenNewIcon />“Re: AWS partnership” — jeff@amazon.com<ReturnIcon className='group-hover:w-4' /></li>
          <li className='group'><OpenNewIcon />“reworked search algorithm” — larry@abc.xyz<ReturnIcon className='group-hover:w-4' /></li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBox;
