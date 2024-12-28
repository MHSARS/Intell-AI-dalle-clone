import FileSaver from 'file-saver';

import { surpriseMePrompts } from '/src/constants';

export function getRandomPrompt(previousPrompt) {
    let randomPrompt;

    do {
        const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
        randomPrompt = surpriseMePrompts[randomIndex];
    } while (randomPrompt === previousPrompt); 

    return randomPrompt;
}


export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}