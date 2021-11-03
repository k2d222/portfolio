import moncraft_fr from "bundle-text:../projects/moncraft/fr.pug"

interface Project {
    img: URL,
    content?: { [key: string]: any }
    collab?: string,
    link?: string,
    git?: string
}

type Projects = { [id: string]: Project }

const MyProjects: Projects = {
    moncraft: {
        img: new URL('../projects/moncraft/moncraft.png?as=webp&width=800', import.meta.url),
        collab: 'Pierre Surer, Houssem Mahmoud',
        link: 'https://moncraft.thissma.fr/',
        git: 'https://github.com/k2d222/MonCraft',
        content: {
          fr: moncraft_fr,
        },
    },
    ur: {
        img: new URL('../projects/ur/gameofur.png?as=webp&width=800', import.meta.url),
        link: 'https://ur.thissma.fr/',
    },
    pixels: {
        img: new URL('../projects/pixels/pixels.png?as=webp&width=800', import.meta.url),
        collab: 'Sébastien Pereira',
        link: 'https://pixels.thissma.fr/',
    },
    podelium: {
        img: new URL('../projects/podelium/artwork.png?as=webp&width=800', import.meta.url),
        collab: 'Emma nourry, Nathanaël Almeida, Koko Bill, Maxime Boissonat',
    },
    goteka: {
        img: new URL('../projects/goteka/widgets.png?as=webp&width=800', import.meta.url),
    },
}

export default MyProjects;
