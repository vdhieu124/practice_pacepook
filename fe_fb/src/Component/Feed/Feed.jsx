import Appbar from "./Appbar/Appbar"
import ChatIcon from "./ChatIcon/ChatIcon"
import ChatModal from "./ChatModal/ChatModal"
import Main from "./Main/Main"
import NewChat from "./NewChat/NewChat"

function Feed(){
    return(
        <>
            <Appbar/>
            <NewChat/>
            <ChatModal/>
            <ChatModal/>
            <ChatModal/>
            <ChatModal/>
            <ChatModal/>
            <Main/>
            <ChatIcon/>
        </>
    )
}
export default Feed