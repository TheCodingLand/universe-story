
const articles = [
    {
        id: 0,
        lang: "fr",
        date: "30000 ans avant JC",
        title: "Le Ciel, la Lune, et les Etoiles",
        text: "Depuis la nuit des temps, les hommes regardent le ciel, tentent de comprendre le balet céleste, la raison de la présence de ces petits points lumineux dans le ciel. Comme en témoignent ces peintures rupestres, datant de plus de 32000 ans, qui dépeignent les periodes de chasse, l'influence de la lune, et une représentation précise de la position des étoiles.",
        image: { url: "images/cieletoile.jpg", height: 486, width: 800 },
    },
    {
        id: 1,
        date: "3 ème siècle avant JC",
        title: "Erasothène",
        text: "La première personne a s’attaquer au problème de l'échelle du monde autour de lui fut Ératosthène de Cyrène. Il savait que lors du jour le plus long de l’année, le soleil était directement au dessus de sa tête dans sa ville natale, mais qu’il projetait une ombre à Alexendrie plus au Nord.",

        image: { url: "images/erastothene.jpg", height: 486, width: 800 },
    },
    {
        id: 2,
        date: "3 ème siècle avant JC",
        title: "L'expérience d'Erastothène",
        text: "En mesurant la longueur de l’ombre, il pu déterminer le diamètre de la terre à 1% près; 3 siècles avant Jesus Christ.",
        image: { url: "images/erastosthenes-exp.jpg", height: 486, width: 800 },
    },

    {
        id: 3,
        date: "Jusqu'au 17ème siècle",
        title: "L'age sombre",
        text: "Mais même si la terre est une sphère; les dogmes pronant une terre plate règnent toujours en maître, soutenus par une église puissante. Le problème est que toutes les observations allaient à l’encontre des dogmes, spécifiquement, que l’observation de certaines étoiles (ou planètes en grec) décrivaient une orbite vraiment étrange autour de la terre, en considérant un univers géocentrique.",
        image: { url: "images/mars-retrograde.jpg", height: 486, width: 800 },
    },
    {
        id: 4,
        date: "17ème siècle",
        title: "Kepler",
        text: "Mais ce ne sera pas avant Johannes Kepler calcule les orbites exactes des planètes, que nous ne décrirons un modèle du système solaire qui corresponde enfin aux observations.",
        image: { url: "images/kepler.jpg", height: 800, width: 400 },
    },
    //Le plus vieux calendrier lunaire ? Ces encoches pratiquées dans une plaquette en os de l'Abri Blanchard en Dordogne (-30'000) correspondraient au trajet de l'astre dans le ciel avec ses différentes phases.

    {
        id: 5,
        date: "18ème siècle",
        title: "parallaxes",
        text: "Jean Picard, Jean-Dominique Cassini et Jean Richer ont ensuite tenté de mesurer la distance de la terre au soleil en utilisant des déductions géométriques grâce à la parallaxe entre mars et la terre.",
        image: { url: "images/kepler.jpg", height: 800, width: 400 },
    },
]

export default articles