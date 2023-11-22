import { tagsDataWithDetails } from './data/tagsDataWithDetails.js';

function parseTagsData(data) {
    const lines = data.split('\n');
    const tagsObject = {};

    lines.forEach(line => {
        // Skip empty lines
        if (line.trim() === '') {
            return;
        }

        const parts = line.split(',').map(part => part.trim());

        const [tag, description, deprecated, notes, srSupport] = parts;

        const cleanedTag = tag.replace(/<|>/g, ''); 

        tagsObject[cleanedTag] = {
            // Removes leading and trailing quotes
            description: description.replace(/^'|'$/g, ''), 
            deprecated: deprecated,
            "notes": notes.replace(/^'|'$/g, ''), 
            "at-support": srSupport
        };
    });
    return tagsObject;
}

export const tagsObject = parseTagsData(tagsDataWithDetails);

console.log(tagsObject);