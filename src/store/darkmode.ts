import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface DarkModeStroe {
    isDarkMode: boolean;
    toggleThemeMode: () => void;
}

const useDarkMode = create<DarkModeStroe>()(
    devtools(
        persist((set, get) => ({
            isDarkMode: false,
            toggleThemeMode: () => set({ isDarkMode: !get().isDarkMode}),
        }), { name: 'darkmode' })
    )
)

export default useDarkMode;