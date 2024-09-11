import "./app.css"

import AppInfo from "../app-info/app-info"
import SerachPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"

const App = () => {
    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo/>
                <div className="search-panel">
                    <SerachPanel/>
                    <AppFilter />
                </div>
                <MovieList/>
            </div>
        </div>
    )
}

export default App