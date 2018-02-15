
import React, { Component } from 'react';
import Article from './Article'


let text = "Depuis la nuit des temps, les hommes regardent le ciel, tentent de comprendre le balet céleste, la raison de la présence de ces petits points lumineux dans le ciel. Comme en témoignent ces peintures rupestres, datant de plus de 32000 ans, qui dépeignent les periodes de chasse, l'influence de la lune, et une représentation précise de la position des étoiles."

let imagewidth = "800px"
let imageheight= "486px"
//vieille de 32'000 ans, Marshack, qui possède de solides connaissances astronomiques, y reconnaît le dessin de la course de la Lune dans le ciel, au fil de plusieurs lunaisons. D'après lui il s'agit là, ni plus ni moins, du premier calendrier lunaire de l'humanité, réalisé dans un but pratique par les chasseurs-cueilleurs paléolithiques : pour mesurer le temps, prévoir les changements de saison et anticiper les migrations du gibier qui les accompagnent. Comme celle de l'Abri Blan-chard, de nombreuses tablettes auraient ainsi servi de calendriers lunaire ou solaire, attestant, selon Marshack, que les Paléolithiques avaient déjà observé les phénomènes solsticiaux et équinoxiaux. Suite à ces travaux fondateurs, les grottes ornées par Cro-Magnon, entre -30 000 et -10000 ans, attirent l'attention des paléoastronomes."
let title = "Le Ciel Etoilé"
let image = "/images/cieletoile.jpg"
//<CielEtoileImg />


class CielEtoile extends Component {
    render() {
      return (
        
        <Article title = {title} text={text} image={image} imageheight={imageheight} imagewidth={imagewidth} />
      )
    }
}

export default CielEtoile;



