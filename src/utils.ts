import * as information from './information.json';

export const about = (): String => {
    let info:String = '';

    info += `\nHi I'm ${information.name}.\n` +
        `I'm currently doing my ${information.msDegree} at ${information.msUni}.\n` +
        `Previously I completed my ${information.bsDegree} from ${information.bsUni}.\n` +
        `I'm a native of ${information.hometown}, currently living in Stuttgart.\n` +
        `Currently learning Deutsch!`;

    return info
};

export const help = ():String => {
    let helpMenu:String = '';

    helpMenu += '\nYou can use the following commands here.\nabout - shows basic information about myself\n' +
        'contact - shows contact information\n' +
        'blog - opens a new tab with my blog\n' +
        'medium - opens a new tab with my blog\n';


    return helpMenu;
};