const movies = [
  {
    ID: 4,
    Duration: 200,
    Image: "gUgdoneM2fzsT6Qx7GhGU4kxUgx.jpg",
    ReleaseDate: "1994-09-23T00:00:00",
    Rating: 8.7,
    Country: "France",
    Title: "The Shawshank Redemption",
    Synopsis:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope."
  },
  {
    ID: 5,
    Duration: 175,
    Image: "eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    ReleaseDate: "1972-03-15T00:00:00",
    Rating: 8.7,
    Country: "USA",
    Title: "The Godfather",
    Synopsis:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
  },
  {
    ID: 6,
    Duration: 133,
    Image: "7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    ReleaseDate: "2019-05-30T00:00:00",
    Rating: 8.5,
    Country: "South Korea",
    Title: "Parasite",
    Synopsis:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident."
  },
  {
    ID: 7,
    Duration: 161,
    Image: "bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    ReleaseDate: "1966-12-23T00:00:00",
    Rating: 8.5,
    Country: "USA",
    Title: "The Good, the Bad and the Ugly",
    Synopsis:
      "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold."
  },
  {
    ID: 9,
    Duration: 201,
    Image: "rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    ReleaseDate: "2003-12-01T00:00:00",
    Rating: 8.5,
    Country: "New Zealand",
    Title: "The Lord of the Rings: The Return of the King",
    Synopsis:
      "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm."
  },
  {
    ID: 11,
    Duration: 152,
    Image: "qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    ReleaseDate: "2008-07-18T00:00:00",
    Rating: 8.5,
    Country: "USA",
    Title: "The Dark Knight",
    Synopsis:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker."
  },
  {
    ID: 12,
    Duration: 142,
    Image: "saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    ReleaseDate: "1994-07-06T00:00:00",
    Rating: 8.5,
    Country: "USA",
    Title: "Forrest Gump",
    Synopsis:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him."
  },
  {
    ID: 13,
    Duration: 145,
    Image: "aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    ReleaseDate: "1990-09-21T00:00:00",
    Rating: 8.5,
    Country: "USA",
    Title: "GoodFellas",
    Synopsis:
      "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway."
  },
  {
    ID: 14,
    Duration: 139,
    Image: "pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    ReleaseDate: "1999-10-15T00:00:00",
    Rating: 8.4,
    Country: "USA",
    Title: "Fight Club",
    Synopsis:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'
  },
  {
    ID: 15,
    Duration: 150,
    Image: "2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    ReleaseDate: "2003-03-28T00:00:00",
    Rating: 8.4,
    Country: "USA",
    Title: "The Pianist",
    Synopsis:
      "The true story of pianist Wladyslaw Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city."
  },
  {
    ID: 16,
    Duration: 179,
    Image: "6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    ReleaseDate: "2001-12-19T00:00:00",
    Rating: 8.4,
    Country: "USA",
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Synopsis:
      "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
  },
  {
    ID: 17,
    Duration: 119,
    Image: "c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
    ReleaseDate: "1998-11-20T00:00:00",
    Rating: 8.5,
    Country: "USA",
    Title: "American History X",
    Synopsis:
      "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did."
  },
  {
    ID: 18,
    Duration: 169,
    Image: "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    ReleaseDate: "2014-11-07T00:00:00",
    Rating: 8.4,
    Country: "USA",
    Title: "Interstellar",
    Synopsis:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
  },
  {
    ID: 19,
    Duration: 179,
    Image: "5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    ReleaseDate: "2002-12-18T00:00:00",
    Rating: 8.4,
    Country: "New Zealand",
    Title: "The Lord of the Rings: The Two Towers",
    Synopsis:
      "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard."
  },
  {
    ID: 20,
    Duration: 111,
    Image: "yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
    ReleaseDate: "1994-09-14T00:00:00",
    Rating: 8.3,
    Country: "France",
    Title: "Léon: The Professional",
    Synopsis:
      "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps."
  },
  {
    ID: 21,
    Duration: 162,
    Image: "jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    ReleaseDate: "2009-12-18T00:00:00",
    Rating: 7.5,
    Country: "USA",
    Title: "Avatar",
    Synopsis:
      "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization."
  },
  {
    ID: 22,
    Duration: 143,
    Image: "th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
    ReleaseDate: "2021-12-08T00:00:00",
    Rating: 7.3,
    Country: "USA",
    Title: "Don't Look Up",
    Synopsis:
      "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
  },
  {
    ID: 23,
    Duration: 143,
    Image: "RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    ReleaseDate: "2012-05-04T00:00:00",
    Rating: 7.7,
    Country: "USA",
    Title: "The Avengers",
    Synopsis:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!"
  },
  {
    ID: 24,
    Duration: 139,
    Image: "fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg",
    ReleaseDate: "2016-10-07T00:00:00",
    Rating: 8.2,
    Country: "Australia",
    Title: "Hacksaw Ridge",
    Synopsis:
      "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor."
  },
  {
    ID: 25,
    Duration: 121,
    Image: "gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    ReleaseDate: "2002-05-03T00:00:00",
    Rating: 7.2,
    Country: "USA",
    Title: "Spider-Man",
    Synopsis:
      "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man."
  },
  {
    ID: 26,
    Duration: 89,
    Image: "sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    ReleaseDate: "1994-06-23T00:00:00",
    Rating: 8.3,
    Country: "USA",
    Title: "The Lion King",
    Synopsis:
      "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?"
  },
  {
    ID: 27,
    Duration: 148,
    Image: "edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    ReleaseDate: "2010-07-16T00:00:00",
    Rating: 8.4,
    Country: "USA",
    Title: "Inception",
    Synopsis:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious."
  },
  {
    ID: 28,
    Duration: 180,
    Image: "pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
    ReleaseDate: "2013-12-25T00:00:00",
    Rating: 8,
    Country: "USA",
    Title: "The Wolf of Wall Street",
    Synopsis:
      "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography."
  },
  {
    ID: 29,
    Duration: 98,
    Image: "bXAVveHiLotZbWdg3PKGhAzxYKP.jpg",
    ReleaseDate: "2021-10-29T00:00:00",
    Rating: 6.6,
    Country: "USA",
    Title: "Paranormal Activity: Next of Kin",
    Synopsis:
      "Margot, a documentary filmmaker, heads to a secluded Amish community in the hopes of learning about her long-lost mother and extended family. Following a string of strange occurrences and discoveries, she comes to realize this community may not be what it seems."
  },
  {
    ID: 30,
    Duration: 131,
    Image: "n31VRDodbaZxkrZmmzyYSFNVpW5.jpg",
    ReleaseDate: "2013-05-22T00:00:00",
    Rating: 6.8,
    Country: "USA",
    Title: "Fast &amp; Furious 6",
    Synopsis:
      "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty."
  }
];

export default movies;
