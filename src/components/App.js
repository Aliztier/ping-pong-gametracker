import React from "react";

import Header from "./Header";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Winner from "./Winner";
import Games from "./Games";
import Reset from "./Reset";
import Settings from "./Settings"



const App = ( gameIsOn ) => (
    <React.Fragment>
        {/* header */}
        <Header />

       { !gameIsOn ? <Settings /> : null}
           
        {/* scores */}
       { gameIsOn ?
        <>

            <div className="row">
                   <Player1  />
                   <Player2  />
               </div>
       
               { /* winner message */}
               <Winner />
       
               <hr />
       
               { /* reset button */}
               <Reset />
       
           { /*games history */}
               <Games />
            </> : null }

    </React.Fragment>
);

export default App;