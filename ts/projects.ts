import perfanalytics_fr from "bundle-text:../projects/perfanalytics/fr.pug"
import perfanalytics_en from "bundle-text:../projects/perfanalytics/en.pug"

import moncraft_fr from "bundle-text:../projects/moncraft/fr.pug"
import moncraft_en from "bundle-text:../projects/moncraft/en.pug"

import ur_fr from "bundle-text:../projects/ur/fr.pug"
import ur_en from "bundle-text:../projects/ur/en.pug"

import pixels_fr from "bundle-text:../projects/pixels/fr.pug"
import pixels_en from "bundle-text:../projects/pixels/en.pug"

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
          en: moncraft_en,
        },
    },
    perfanalytics: {
        img: new URL('../projects/perfanalytics/perfanalytics.png?as=webp&width=800', import.meta.url),
        link: 'https://perfanalytics.fr',
        content: {
          fr: perfanalytics_fr,
          en: perfanalytics_en,
        },
    },
    ur: {
        img: new URL('../projects/ur/gameofur.png?as=webp&width=800', import.meta.url),
        link: 'https://ur.thissma.fr/',
        content: {
          fr: ur_fr,
          en: ur_en
        },
    },
    pixels: {
        img: new URL('../projects/pixels/pixels.png?as=webp&width=800', import.meta.url),
        collab: 'Sébastien Pereira',
        link: 'https://pixels.thissma.fr/',
        content: {
          fr: pixels_fr,
          en: pixels_en,
        },
    },
    podelium: {
        img: new URL('../projects/podelium/artwork.png?as=webp&width=800', import.meta.url),
        collab: 'Emma Nourry, Nathanaël Almeida, Koko Bill Zadi Kenfack, Maxime Boissonat, Gaël Erluche',
    },
    goteka: {
        img: new URL('../projects/goteka/widgets.png?as=webp&width=800', import.meta.url),
    },
}

export default MyProjects;
