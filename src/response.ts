import { PropertiesSkills, PropertiesProjects } from './types';

export function GetSkills(query: any[]) {
    const list: PropertiesSkills[] = query.map((row) => {
        const titleCell = row.properties.title;
        const linguagemCell = row.properties.linguagem;
        const descriptionCell = row.properties.description;

        const isLinguagem = linguagemCell.type === 'url';
        const isDescription = descriptionCell.type === 'rich_text';
        const isTitle = titleCell.type === 'title';

        if (isLinguagem && isDescription && isTitle) {
            const linguagem = linguagemCell.url ?? '';
            const description = descriptionCell.rich_text[0]
                ? descriptionCell.rich_text[0].plain_text
                : null;
            const title = titleCell.title[0]
                ? titleCell.title[0].plain_text
                : null;

            return { linguagem, description, title };
        }

        return { linguagem: '', description: '', title: '' };
    });

    return list;
}

export function GetProject(query: any[]) {
    const list: PropertiesProjects[] = query.map((row) => {
        const titleCell = row.properties.title;
        const imageCell = row.properties.image;
        const descriptionCell = row.properties.description;
        const linkCell = row.properties.link;

        const isTitle = titleCell.type === 'title';
        const isImage = imageCell.type === 'url';
        const isDescription = descriptionCell.type === 'rich_text';
        const isLink = linkCell.type === 'url';

        if (isTitle && isImage && isDescription && isLink) {
            const title = titleCell.title[0]
                ? titleCell.title[0].plain_text
                : null;
            const image = imageCell.url ?? '';
            const description = descriptionCell.rich_text[0]
                ? descriptionCell.rich_text[0].plain_text
                : null;
            const link = linkCell.url ?? '';

            return { title, image, description, link };
        }
        return { title: null, image: '', description: null, link: '' };
    });

    return list;
}
