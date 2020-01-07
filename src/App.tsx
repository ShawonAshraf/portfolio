import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

import {
    about,
    help,
    contact,
    interests,
    publications,
    learning,
    takeTo,
} from './utils';

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
                        'help': () => help(),
                        'about': () => about(),
                        'interests': () => interests(),
                        'publications': () => publications(),
                        'learning': () => learning(),
                        'contact': () => contact(),
                        'blog': () => takeTo('blog'),
                        'medium': () => takeTo('medium'),
                        'photography': () => takeTo('photography'),
                        'github': () => takeTo('github'),
                    }}
                    msg='Type help (and press enter or return) to get started! You can also click on the green dot on top to maximize the console.'
                />
            </div>
        );
    }
}

export default App;
