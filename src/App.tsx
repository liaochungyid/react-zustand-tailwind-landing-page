import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SearchBox from './components/search-box';

import useDarkMode from './store/darkmode';

function App() {
    const isDarkMode = useDarkMode(state => state.isDarkMode);

    return (
        <div className={`relative flex flex-col flex-nowrap h-screen items-center ${isDarkMode ? 'dark bg-[#2E3643]' : 'bg-white-100'}`}>
            <Navbar />
            <Hero />
            <Footer />
            <SearchBox />
        </div>
    );
}

export default App;
