import React, { useState, useEffect } from 'react';
import './App.css';

import { Wheel } from 'react-custom-roulette'


const frenchWords = [
  "chaise",
  "chat",
  "soleil",
  "table",
  "fleur",
  "voiture",
  "arbre",
  "maison",
  "oiseau",
  "montagne",
  "rivière",
  "étoile",
  "plage",
  "bateau",
  "forêt",
  "jour",
  "nuit",
  "pomme",
  "mer",
  "ciel",
  "vent",
  "lune",
  "vache",
  "poisson",
  "balle",
  "piano",
  "école",
  "poème",
  "lait",
  "gâteau",
  "chemin",
  "moto",
  "orange",
  "girafe",
  "pont",
  "avion",
  "téléphone",
  "train",
  "papillon",
  "église",
  "tortue",
  "livre",
  "travail",
  "ordinateur",
  "jardin",
  "chapeau",
  "balle",
  "fenêtre",
  "chemise",
  "loup",
  "poêle",
  "hélicoptère",
  "chocolat",
  "cheminée",
  "carte",
  "étoile",
  "bouteille",
  "mouton",
  "télévision",
  "parapluie",
  "clé",
  "guitare",
  "fenêtre",
  "rocher",
  "horloge",
  "ballon",
  "citron",
  "marteau",
  "piscine",
  "voiture",
  "écharpe",
  "portable",
  "chaussure",
  "tableau",
  "poisson",
  "croissant",
  "moto",
  "ordinateur",
  "fusée",
  "brosse",
  "tigre",
  "bureau",
  "miroir",
  "gants",
  "fauteuil",
  "clavier",
  "lampe",
  "pingouin",
  "montre",
  "stylo",
  "bougie",
  "piano",
  "tortue",
  "ballerine",
  "vélo",
  "grenouille",
  "araignée",
  "moustache",
  "piano",
  "bouteille",
  "tapis",
  "lampe",
  "escargot",
  "nuage",
  "baguette",
  "champignon",
  "château",
  "miel",
  "parfum",
  "carton",
  "épée",
  "cheminée",
  "tunnel",
  "boussole",
  "plume",
  "champ",
  "cerf",
  "épicerie",
  "feuille",
  "orchidée",
  "miroir",
  "clown",
  "verre",
  "roche",
  "cerise",
  "girafe",
  "savon",
  "escalier",
  "alligator",
  "perroquet",
  "scarabée",
  "coccinelle",
  "dromadaire",
  "écureuil",
  "koala",
  "loutre",
  "ornithorynque",
  "paresseux",
  "toucan",
  "hibou",
  "pangolin",
  "renard",
  "hermine",
  "suricate",
  "wapiti",
  "écureuil",
  "zèbre"
]

const danishWords = [
  "Bord",
  "Stol",
  "Hus",
  "Bil",
  "Hund",
  "Kat",
  "Skov",
  "Sol",
  "Måne",
  "Vand",
  "Fisk",
  "Blomst",
  "Børn",
  "Sko",
  "Æble",
  "Mad",
  "Kaffe",
  "Te",
  "Dør",
  "Vindue",
  "Bog",
  "Penge",
  "Tid",
  "Gave",
  "Kage",
  "Seng",
  "Stjerne",
  "Fly",
  "Tog",
  "Billede",
  "Fugl",
  "Morgen",
  "Aften",
  "Nat",
  "Frokost",
  "Middag",
  "Sav",
  "Hammer",
  "Skruetrækker",
  "Computer",
  "Mobiltelefon",
  "Træ",
  "Skole",
  "Lærer",
  "Student",
  "Universitet",
  "Sygehus",
  "Patient",
  "Sygeplejerske",
  "Fodbold",
  "Musik",
  "Film",
  "Billeje",
  "Strand",
  "Sø",
  "Bjerg",
  "Kaffebar",
  "Restaurant",
  "Pizza",
  "Cykel",
  "Bus",
  "Flyvemaskine",
  "Taske",
  "Jakke",
  "Sokker",
  "Ure",
  "Smykker",
  "Solbriller",
  "Regn",
  "Sne",
  "Skyer",
  "Regnbue",
  "Himmel",
  "Støvler",
  "Skjorte",
  "Bukser",
  "Hue",
  "Handsker",
  "Hat",
  "Paraply",
  "Badeværelse",
  "Køkken",
  "Soveværelse",
  "Stue",
  "Balkon",
  "Have",
  "Telefon",
  "Tastatur",
  "Mus",
  "Skærm",
  "Kamera",
  "Tastatur",
  "Mus",
  "Skærm",
  "Kamera",
  "Maleri",
  "Dans",
  "Ballet",
  "Museum",
  "Teater",
  "Badekar",
  "Spejl",
  "Vaskemaskine",
  "Køleskab",
  "Kogeplade",
  "Ovn",
  "Mikrobølgeovn",
  "Kaffemaskine",
  "Brødrister",
  "Blender",
  "Fjernsyn",
  "Lænestol",
  "Sofa",
  "Reol",
  "Skab",
  "Kommode",
  "Sengetøj",
  "Hovedpude",
  "Dyne",
  "Tæppe",
  "Skraldespand",
  "Støvsuger",
  "Vinduespudser",
  "Fejeblad",
  "Fejebakke",
  "Skraldemand",
  "Sodavand",
  "Juice",
  "Mælk",
  "Brød",
  "Smør",
  "Ost",
  "Pålæg",
  "Yoghurt",
  "Ris",
  "Pasta",
  "Kød",
  "Kyckling",
  "Fisk",
  "Æg",
  "Frugt",
  "Grøntsager",
  "Kage",
  "Chokolade",
  "Is",
  "Kiks",
  "Slik",
  "Nødder",
  "Chips",
  "Pizza",
  "Burger"
]

const colors = [
  "#FF6666",  // Light Red
  "#66FF66",  // Light Green
  "#6666FF",  // Light Blue
  "#FFB266",  // Light Orange
  "#B266FF",  // Light Purple
  "#FFD966",  // Light Amber
  "#D966FF",  // Light Violet
  "#FF80AA",  // Light Magenta
  "#AAFFAA",  // Light Mint Green
  "#AA80FF",  // Light Periwinkle
  "#AAE0FF",  // Light Cornflower Blue
  "#FFDAAA",  // Light Pastel Orange
  "#DAAAFF",  // Light Lavender
  "#DAAAFF",  // Light Orchid
  "#FFAAD5",  // Light Bubble Gum Pink
  "#FFAAD5",  // Light Fuchsia
]

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState();
  const [words, setWords] = useState([])
  const [describedWords, setDescribedWords] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('fr')

  useEffect(() => {
    const count = 10;
    function getRandomIntegers() {
      const min = 0;
      const max = frenchWords.length;;

      const uniqueIntegers = new Set();

      while (uniqueIntegers.size < count) {
        const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueIntegers.add(randomInteger);
      }

      return Array.from(uniqueIntegers);
    }
    const indices = getRandomIntegers();
    const randomWords = indices.map(i => selectedLanguage === 'fr' ? frenchWords[i] : danishWords[i])
    setWords(randomWords)
  }, [selectedLanguage])


  const handleSpinClick = () => {

    if (prizeNumber !== undefined) {
      const newWords = [...words]
      newWords.splice(prizeNumber, 1)
      setWords(newWords)
      setDescribedWords([...describedWords, words[prizeNumber]])
    }
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * words.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  const handleLanguageChange = (event) => {
    setPrizeNumber(undefined)
    setMustSpin(false)
    setDescribedWords([])
    setSelectedLanguage(event.target.value);
  };


  return (
    <>
      <label for="language-select">Select Language:</label>
      <select onChange={handleLanguageChange} id="language-select">
        <option value="fr">Français</option>
        <option value="da">Dansk</option>
      </select>
      <div style={{ display:'flex', justifyContent:'space-evenly', width: '100vw'}}>
        <div>
          <div style={{ borderRight: '1px solid grey', height: 500 }}>
            <h2>{selectedLanguage === 'fr' ? 'Mots décrits' : 'Beskrevne ord'}</h2>
            <ul style={{width:300}}>
              {describedWords.map((word) => <li>{word}</li>)}
            </ul>
          </div>
        </div>
        {words.length > 0 &&
          <div style={{ textAlign: 'center', }}>
            <h2>
              {selectedLanguage === 'fr' ? 'Décrivez ce mot' : 'Beskriv dette ord'}: {!mustSpin && words[prizeNumber]}</h2>
            <Wheel
              key={`wheel-${selectedLanguage}`}
              outerBorderColor='white'
              innerBorderColor='white'
              radiusLineColor={'white'}
              innerBorderWidth={1}
              outerBorderWidth={1}
              innerRadius={30}
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={words.map((word, i) => ({
                option: word, style: { backgroundColor: colors[i], fontSize: 18 }

              }))}

              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
            <button disabled={mustSpin} style={{ fontSize: '30px', border: '0.5px solid grey', backgroundColor: 'lightgreen', padding: 10, borderRadius: 5, marginTop: 50 }} onClick={handleSpinClick}>
              {selectedLanguage === 'fr' ? 'En avant' : 'Rul'}!</button>
          </div>}
      </div>
    </>
  )
}

export default App;
