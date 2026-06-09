import { useState } from "react";
import CreateNote from "./CreateNote";
 function Home(){
    const [showNote, setShowNote] = useState(false);

    return(
   <>
      <h1>My Notes App</h1>
      <button onClick={() => setShowNote(true)}>
        Create Note
      </button>

      {showNote && <CreateNote />}
   </>
    );
     
 }
 export default Home