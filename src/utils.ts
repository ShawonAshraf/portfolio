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
