export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //Remove after finished
    // token:'BQDHypO-bCoGPMfFiUkeutzmsqNNqyhTE-1oo0F4n8X2UvQoUWP22ForZw5dNXKHCGGavfcCEYK9SPOvk8eDcFbdquNMfRoTH6oPbaLLK7G1P1pv_95u3VsoT3gyFwGDDL9ZqbbCBKMDGSdUiqTIPDlkctwNEjTkx_HB0EV_mmFu2Y83mrEi',
};

const reducer = (state , action)=>{
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };

      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };

      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };

      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };

      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
        
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };

      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };

      default:
        return state;
    }
};

export default reducer;