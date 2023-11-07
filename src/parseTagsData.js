import { tagsDataWithDetails } from './data/tagsDataWithDetails.js';

function parseTagsData(data) {
    const lines = data.split('\n');

    const tagsObject = {};

    lines.forEach(line => {
        const [tag, decription, support, ...notes] = line.split(',');

        const cleanedTag = tag.trim().replace(/<|>/g, '');

        tagsObject[cleanedTag] = {
            decription: decription.trim(),
            support: support.trim(),
            notes: notes.join(',').trim()
        }
    })
    return tagsObject;
}

export const tagsObject = parseTagsData(tagsDataWithDetails);

console.log(tagsObject);