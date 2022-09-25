import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface SearchbarStore {
    isSearchBarOpen: boolean;
    toggleSearchBar: () => void;
}

const useSearchbar = create<SearchbarStore>()(
    devtools((set, get) => ({
            isSearchBarOpen: false,
            toggleSearchBar: () => set({ isSearchBarOpen: !get().isSearchBarOpen }),
        })
    )
)

export default useSearchbar;