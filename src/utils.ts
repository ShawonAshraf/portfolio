import * as information from './information.json';

export const help = ():String => {
    let helpMenu:String = '';

    helpMenu += '\nYou can use the following commands here.\n\n' +
        'about - shows basic information about myself\n' +
        'interests - shows my current research interests\n' +
        'publications - a list of my published research work\n' +
        'learning - what I\'m currently learning\n' +
        'contact - shows contact information\n' +
        'blog - opens a new tab with my blog\n' +
        'medium - opens a new tab with my blog\n' +
        'photography - takes you to my flickr profile\n' +
        'github - takes you to my github profile\n';


    return helpMenu;
};

export const about = (): String => {
    let info:String = '';

    info += `\nHi! I'm ${information.name}.\n` +
        `I'm currently doing my ${information.msDegree} at ${information.msUni}. ` +
        `Previously I completed my ${information.bsDegree} from ${information.bsUni}. ` +
        `I'm a native of ${information.hometown}, currently living in Stuttgart.\n` +
        '\n\n' +
        `My hobbies include(but not limited to!) ${information.hobbies}.\n` +
        `Music? ${information.music}.`;

    return info
};

export const interests = ():String => {
    return information.interestedIn;
};

export const publications = ():String => {
    let pub:String = '';

    for (let i in information.publications) {
        pub += `\n-\n` +
            `${information.publications[i].title}\n` +
            `${information.publications[i].link}\n`;
    }

    return pub;
};

export const contact = ():String => {
    return `\nemail - ${information.email}` +
        `\ngithub - ${information.github}` +
        `\nblog - ${information.blog}` +
        `\nmedium - ${information.medium}` +
        `\nflickr - ${information.flickr}`;
};
