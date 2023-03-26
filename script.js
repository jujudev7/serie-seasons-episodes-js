let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Calculate totalShowTime
// =====================================
let episodeTime = 45;
let commercialTime = 5;

let totalShowTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} saisons, ${numberOfEpisodes} épisodes par saison

Temps total de visionnage : ${totalShowTime} minutes`

let episodeTitle = "Il était une fois une femme" ;
let episodeDuration = 48;
let hasBeenWatched = false;

// =========================================

document.querySelector('#episode-info').innerText = `Épisode: ${episodeTitle}
Durée: ${episodeDuration} minutes
${hasBeenWatched ? 'Déjà vu' : 'Pas encore vu'}`

// Creation Object
// =========================================
let episode = {
    title: "Un Secret",
    duration: 52,
    hasBeenWatched: false
  };

  document.querySelector('#episode-info-object').innerText = `Épisode: ${episode.title}
  Durée: ${episode.duration} minutes
  ${episode.hasBeenWatched ? 'Déjà vu' : 'Pas encore vu'}`;

// DOT NOTATION
// =====================================
let episodeDot = {
    title: 'La Revanche',
    duration: 45,
    hasBeenWatched: false
  };

let episodeDotTitle = episodeDot.title;
let episodeDotDuration = episodeDot.duration;
let episodeDotHasBeenWatched = episodeDot.hasBeenWatched;

// =====================================

document.querySelector('#episode-info-dot-notation').innerText = `Épisode: ${episodeDotTitle}
Duréé: ${episodeDotDuration} minutes
${episodeDotHasBeenWatched ? 'Déjà vu' : 'Pas encore vu'}`;
