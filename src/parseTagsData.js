import { tagsDataWithDetails } from './data/tagsDataWithDetails.js';

function parseTagsData(data) {
    const lines = data.split('\n');
    const tagsObject = {};

    lines.forEach(line => {
        // Skip empty lines if they exist in the raw data
        if (line.trim() === '') {
            return;
        }
        // Split each line of raw data into an array of parts
        const parts = line.split(',').map(part => part.trim());
        // Destructure the parts array into variables
        const [tag, description, deprecated, notes, atSupport] = parts;

        const cleanedTag = tag.replace(/<|>/g, ''); 
        // Removes leading and trailing quotes from description and notes
        const objRegex = /^'|'$/g;

        tagsObject[cleanedTag] = {
            
            'description': description.replace(objRegex, ''), 
            'deprecated': deprecated === 'TRUE', // Converts to boolean
            'notes': notes.replace(objRegex, ''), 
            'at-support': atSupport === 'TRUE', // Converts to boolean
        };
    });
    return tagsObject;
}

export const tagsObject = parseTagsData(tagsDataWithDetails);

