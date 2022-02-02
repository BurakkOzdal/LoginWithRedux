import AsyncStorageLib from "@react-native-async-storage/async-storage";

function reducers(state, action) {
    switch (action.type) {
        case "SET_USER":
            const { user } = action.payload;
            AsyncStorageLib.setItem("@USER", JSON.stringify(user))
            return { ...state, user }
        case "REMOVE_USER":
            AsyncStorageLib.removeItem("@USER")
            return { ...state, user:null }
        default:
            return state;
    }
}
export default reducers