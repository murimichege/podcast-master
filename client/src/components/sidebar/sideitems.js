import ExploreIcon from '@mui/icons-material/Explore';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ClassIcon from '@mui/icons-material/Class';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PieChartIcon from '@mui/icons-material/PieChart';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dashboard from '../pages/menu/Dashboard/Dashboard';
import Trending from '../pages/library/Trending/Trending';



export const menuroutes = [
    {
        
        name: "Discover",
        route:"/Discover",
        icon: <ExploreIcon/>

    },
    {
        name: "Trending",
        route:"/Trending",
        icon: <InsertChartIcon/>
       
    },
    {
        name: "Trending",
        route:"/Discover",
        icon: <ClassIcon/>
        
    },
    {
        name: "Trending",
        route:"/Discover",
        icon: <LibraryMusicIcon/>    },
    {
        name: "Trending",
        route:"/Discover",
        icon: <KeyboardVoiceIcon/>    }
    
    
]

export const librarymenu = [
    {
        name: "Recent",
        route:"/Discover",
        icon: <PieChartIcon/>
    },
    {
        name: "Playlists",
        route:"/Discover",
        icon: <PlaylistPlayIcon/>
    },
    {
        name: "Favorites",
        route:"/Discover",
        icon: <FavoriteIcon/>
    },
    {
        name: "Local",
        route:"/Discover",
        icon: <FavoriteIcon/>

    }
]

export const customizemenu = [
    {
        name: "Account",
        route:"/Discover",
        icon: <FavoriteIcon/>
    },
    {
        name: "NewPlaylist",
        route:"/Discover",
        icon: <PlaylistAddIcon/>
    },
    {
        name: "Settings",
        route:"/Discover",
        icon: <PlaylistAddIcon/>
    }
]


export const headeritems = [
    {
        title: "NEW RELEASES",
        route: '/new-releases'

    },
    {
        title: "SHUFFLE PLAY",
        route: '/Shuffle'

    },
    {
        title: "LIVE PODCASTS",
        route: "/Live-Podcasts"
    }
]