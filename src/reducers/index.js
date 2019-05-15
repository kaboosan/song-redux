import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Toto', duration: '4:05' },
        { title: 'Balop', duration: '4:44' },
        { title: 'Gauiop', duration: '2:15' },
        { title: 'Mapoi', duration: '3:55' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}; 

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});