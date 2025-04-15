const albumCovers = [
    {
      name: "The Dark Side of the Moon",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/Pink-Floyd-Dark-Side-of-the-Moon.jpg?w=1280",
      artist: "Pink Floyd",
      category: "Rock",
      year: 1973,
      rating: 9.8
    },
    {
      name: "The Velvet Underground & Nico",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/Velvet-Undergound-Velvet-Underground-and-Nico.jpg?w=1280",
      artist: "The Velvet Underground",
      category: "Rock",
      year: 1967,
      rating: 8.4
    },
    {
      name: "To Pimp a Butterfly",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/Kendrick-Lamar-To-Pimp-a-Butterfly.jpg?w=1280",
      artist: "Kendrick Lamar",
      category: "Hip-Hop",
      year: 2015,
      rating: 8.7
    },
    {
      name: "Stankonia",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/Outkast-Stankonia.jpg?w=1280",
      artist: "Outkast",
      category: "Hip-Hop",
      year: 2000,
      rating: 8.7
    },
    {
      name: "Rumours",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/Fleetwood-Mac-Rumours.jpg?w=1280",
      artist: "Fleetwood Mac",
      category: "Rock",
      year: 1977,
      rating: 9.4
    },
    {
      name: "SOS",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/SZA-SOS.jpg?w=1280",
      artist: "SZA",
      category: "R&B",
      year: 2022,
      rating: 7.1
    },
    {
      name: "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
      image: "https://www.rollingstone.com/wp-content/uploads/2024/06/David-Bowie-Ziggy.jpg?w=1280",
      artist: "David Bowie",
      category: "Rock",
      year: 1972,
      rating: 9.7
    },
    {
      name: "The College Dropout",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
      artist: "Kanye West",
      category: "Hip-Hop",
      year: 2004,
      rating: 8.5
    },
    {
      name: "Channel Orange",
      image: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
      artist: "Frank Ocean",
      category: "R&B",
      year: 2012,
      rating: 8.9
    },
    {
      name: "What's Going On",
      image: "https://d.newsweek.com/en/full/1802884/marvin-gayes-whats-going-turns-50.webp?w=1400&f=22539f0720466329c802e793e9235e4c",
      artist: "Marvin Gaye",
      category: "R&B",
      year: 1971,
      rating: 9.7
    },
    {
      name: "In the Court of the Crimson King",
      image: "https://ia601507.us.archive.org/11/items/KingCrimsonIntheCourtoftheCrimsonKing/In%20the%20Court%20of%20the%20Crimson%20King%20%28An%20Observation%20by%20King%20Crimson%29.png",
      artist: "King Crimson",
      category: "Rock",
      year: 1969,
      rating: 10.0
    },
    {
      name: "Currents",
      image: "https://ia801009.us.archive.org/13/items/TameImpalaCurrents/%21Currents.png",
      artist: "Tame Impala",
      category: "Pop",
      year: 2015,
      rating: 6.6
    },
    {
      name: "Lemonade",
      image: "https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024",
      artist: "Beyoncé",
      category: "R&B",
      year: 2016,
      rating: 7.3
    },
    {
      name: "Igor",
      image: "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=1024",
      artist: "Tyler the Creator",
      category: "Hip-Hop",
      year: 2019,
      rating: 8.1
    },
    {
      name: "Elephant",
      image: "https://www.billboard.com/wp-content/uploads/2023/07/the-white-stripes-elephant-cover-2003-billboard-1240.jpg?w=1024",
      artist: "The White Stripes",
      category: "Rock",
      year: 2003,
      rating: 8.2
    },
    {
      name: "1989",
      image: "https://www.billboard.com/wp-content/uploads/2022/03/50.-Taylor-Swift-%E2%80%981989-2014-album-art-billboard-1240.jpg?w=1024",
      artist: "Taylor Swift",
      category: "Pop",
      year: 2000,
      rating: 7.8
    },
    {
      name: "Abbey Road",
      image: "https://www.billboard.com/wp-content/uploads/2022/03/2.-The-Beatles-%E2%80%98Abbey-Road-1969-album-art-billboard-1240.jpg?w=1024",
      artist: "The Beatles",
      category: "Rock",
      year: 1969,
      rating: 10.0
    },
    {
      name: "Post",
      image: "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-90s-05.jpg",
      artist: "Björk",
      category: "Pop",
      year: 1995,
      rating: 8.0
    },
    {
      name: "Californication",
      image: "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-90s-40.jpg",
      artist: "Red Hot Chili Peppers",
      category: "Rock",
      year: 1999,
      rating: 7.9
    },
    {
      name: "In Utero",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/b897255bf422baa93a42536af293f9f8.jpg#b897255bf422baa93a42536af293f9f8",
      artist: "Nirvana",
      category: "Rock",
      year: 1993,
      rating: 8.5
    },
    {
      name: "Merriweather Post Pavilion",
      image: "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2000s-04.jpg",
      artist: "Animal Collective",
      category: "Pop",
      year: 2009,
      rating: 7.5
    },
    {
      name: "Speaking in Tongue",
      image: "https://indieground.net/wp-content/uploads/2013/05/indieblog-best-album-covers-80s-16-1024x1024.jpg",
      artist: "Talking Heads",
      category: "Rock",
      year: 1983,
      rating: 8.8
    },
    {
      name: "Ok Computer",
      image: "https://indieground.net/wp-content/uploads/2013/06/indieblog-best-album-covers-90s-13.jpg",
      artist: "Radiohead",
      category: "Rock",
      year: 1997,
      rating: 9.1
    },
    {
      name: "Pet Sounds",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg",
      artist: "Beach Boys",
      category: "Pop",
      year: 1966,
      rating: 9.6
    },
    {
      name: "Random Access Memories",
      image: "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2010s-49.jpg",
      artist: "Daft Punk",
      category: "Pop",
      year: 2013,
      rating: 8.1
    },
    {
      name: "Sticky Fingers",
      image: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Rolling_Stones_-_Sticky_Fingers.png",
      artist: "Rolling Stones",
      category: "Rock",
      year: 1971,
      rating: 9.6
    },
    {
      name: "The Big Day",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Chance_the_Rapper_-_The_Big_Day.png",
      artist: "Chance the Rapper",
      category: "Hip-Hop",
      year: 2013,
      rating: 3.0
    },
    {
      name: "Bad",
      image: "https://cdn-p.smehost.net/sites/28d35d54a3c64e2b851790a18a1c4c18/wp-content/uploads/2017/04/19870831_bad_album.jpg",
      artist: "Michael Jackson",
      category: "Pop",
      year: 1987,
      rating: 9.2
    },
    {
      name: "Songs in the Key of Life",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg",
      artist: "Stevie Wonder",
      category: "Hip-Hop",
      year: 1976,
      rating: 9.8
    },
    {
      name: "Transformer",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f1/Loureedtransformer.jpeg",
      artist: "Lou Reed",
      category: "Hip-Hop",
      year: 1972,
      rating: 9.3
    },
    {
      name: "Highway 61 Revisited",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Chance_the_Rapper_-_The_Big_Day.png",
      artist: "Bob Dylan",
      category: "Rock",
      year: 1965,
      rating: 9.7
    }
  ];
  