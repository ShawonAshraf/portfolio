import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

import { about } from './utils';

class App extends Component<any, any> {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Terminal
                    color='yellow'
                    backgroundColor='black'
                    barColor='silver'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'about': () => about(),
                    }}
                    msg='Type about to get started!'
                />
            </div>
        );
    }
}

export default App;
