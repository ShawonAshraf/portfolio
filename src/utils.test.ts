import * as information from './information.json';

import {
    about,
    help,
    contact,
    interests,
    publications,
    learning,
    takeTo,
} from './utils';

test('help menu populates', () => {
    const helpMenu = help();
    expect(helpMenu).toBeTruthy();
});

test('returns about info string', () => {
    const str = about();
    expect(str).toBeTruthy();
});

test('returns contact info string', () => {
    const str = contact();
    expect(str).toBeTruthy();
});

test('returns interests info string', () => {
    const str = interests();
    expect(str).toBeTruthy();
});

test('returns publications info string', () => {
    const str = publications();
    expect(str).toBeTruthy();
});

test('returns learning info string', () => {
    const str = learning();
    expect(str).toBeTruthy();
});

test('takeTo returns a valid url', () => {
    // suppress jsdom virtial console error
    window.open = jest.fn(() => ({}));
    const str = takeTo('blog');
    expect(str).toBeTruthy();
});

test('information json file exists', () => {
    expect(information).toBeTruthy();
});