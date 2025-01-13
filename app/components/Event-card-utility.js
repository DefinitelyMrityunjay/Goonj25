// Sample Events Data
export const events = [
    {
        title: 'Mr and Miss Goonj',
        image: '/events/old/mr and miss goonj.jpg',
        date: '2024-03-14',
        time: '8:00 PM',
        venue: 'UIET, Panjab University',
        description: `Experience more than just a fashion show- it's a celebration of individuality where your unique style steals the show.Are you a trendsetter, a rule- breaker, or a timeless icon ?`,
        capacity: '150 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/mr_and_mrs_goonj/mrmrs-${i + 1}.jpg`,
                title: ['mr_mrs_goonj', 'mr_mrs_goonj', 'mr_mrs_goonj', 'mr_mrs_goonj'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Stylish participants lit up the runway',
                'Unique fashion and individuality celebrated',
                'Prestigious titles awarded to standout performers',
                'A glamorous evening for all attendees'
            ]
        }
    },
    {
        title: 'Bhangra Competition',
        image: '/events/old/bhangra wars.jpg',
        date: '14-03-2024',
        time: '2:00 PM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `The Bhangra Solo Competition at Goonj 2025 was a vibrant display of Punjabi culture and individual talent. Participants performed dynamic and high-energy solo routines, showcasing their mastery of traditional Bhangra moves.`,
        capacity: '50 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/bhangra/bhangra-${i + 1}.jpg`,
                title: ['bhangra', 'bhangra', 'bhangra', 'bhangra'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Dynamic and energetic Bhangra moves',
                'Vibrant traditional outfits',
                'The energy and enthusiasm of the participants',
                'A celebration of individual talent and cultural pride'
            ]
        }
    },
    {
        title: 'CID',
        image: '/events/old/cid.png',
        date: '2024-03-14',
        time: '2:00 PM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `Step into the shoes of a true detective at CID (CRACK- INVESTIGATE -DECODE) and experience the thrill of solving a gripping mystery!`,
        capacity: '150 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/cid/cid-${i + 1}.jpg`,
                title: ['cid', 'cid', 'cid', 'cid'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Participants raced against time to solve mysteries',
                'Codes cracked and puzzles unraveled with teamwork',
                'A thrilling detective adventure for all involved',
                'Fun and excitement kept the competition alive'
            ]
        }
    },
    {
        title: 'Hackathon',
        image: '/events/old/TECHNOVATE.png',
        date: '2024-03-13',
        time: '6:00 PM',
        venue: 'UIET, Panjab, University',
        description: 'Participants worked tirelessly to create impactful tech solutions. Teams brainstormed, coded, and collaborated under tight deadlines, showcasing their technical expertise and creativity.',
        capacity: '70 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/hackathon/hackathon-${i + 1}.jpg`,
                title: ['cid', 'cid', 'cid', 'cid'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Non - stop innovation and creativity over 24 hours',
                'Teams developed unique solutions to real - world problems',
                'Collaboration and problem - solving skills were put to the test',
                'Exciting demos of prototypes and presentations to judges'
            ]
        }
    },
    {
        title: 'Comedy Hunt',
        image: '/events/old/comedy Hunt.jpg',
        date: '2024-03-12',
        time: '2:00 PM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `Get ready to laugh till your sides hurt at our Comedy Hunt! 🎭🤣 It's a hilarious showdown where every joke is a gem waiting to be discovered. 🤩`,
        capacity: '60 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/comic_tribe/comic-${i + 1}.jpg`,
                title: ['comedy_hunt', 'comedy_hunt', 'comedy_hunt', 'comedy_hunt'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Side-splitting laughter filled the event',
                'Stand-up performers showcased their wit and humor',
                'Unforgettable comedic talent',
                'The audience enjoyed every joke and punchline'
            ]
        }
    },
    {
        title: 'Treasure Hunt',
        image: '/events/old/TREASURE HUNT.png',
        date: '2024-03-13',
        time: '11:00 AM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `🌟 Assemble your crew, decipher cryptic clues, and conquer challenges together. 💪 Whether you're a seasoned explorer or a newcomer to the world of adventure, this quest promises unforgettable moments and memories.`,
        capacity: '50 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/treasure_hunt/treasurehunt-${i + 1}.jpg`,
                title: ['treasure_hunt', 'treasure_hunt', 'treasure_hunt', 'treasure_hunt'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Intriguing clues to uncover treasures',
                'Unique challenges',
                'Adventure filled with excitement and surprises',
                'Unforgettable memories'
            ]
        }
    },
    {
        title: 'Monologue',
        image: '/events/old/monologue.jpg',
        date: '2024-03-13',
        time: '10:00 AM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `Get ready to steal the spotlight and ignite the stage with your unmatched charisma at our Monologue Marvel competition! 🎭✨ It's your time to shine as you unleash the full force of your acting prowess and command the attention of every eye and ear in the room.`,
        capacity: '30 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/monologue/monologue-${i + 1}.jpg`,
                title: ['monologue', 'monologue', 'monologue', 'monologue'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Performances captured emotions and hearts',
                'Participants showcased their acting talents',
                'Dramatic storytelling',
                'A celebration of theater and charisma'
            ]
        }
    },
    {
        title: 'IPL Auction',
        image: '/events/old/IPL AUCTION.png',
        date: '2024-03-14',
        time: '1:00 PM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `The IPL Auction at Goonj 2025 brought the thrill of cricket and strategy to life. Participants engaged in competitive bidding to build their dream IPL teams.`,
        capacity: '70 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/ipl/ipl-${i + 1}.jpg`,
                title: ['ipl', 'ipl', 'ipl', 'ipl'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Intense bidding wars among participants for their favorite players',
                'Strategic planning and budgeting showcased by the teams',
                'Excitement peaked as key players were sold at record prices',
                'Teams carefully balanced stars and underdogs to build strong lineups'
            ]
        }
    },
    {
        title: 'Singing Solo',
        image: '/events/old/singing solo.jpg',
        date: '2024-03-13',
        time: '4:00 PM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `The Singing Solo Competition at Goonj 2025 was a melodious journey showcasing the incredible vocal talents of participants. Each performer brought their unique style and passion to the stage, captivating the audience with a mix of heartfelt ballads and dynamic tunes.`,
        capacity: '40 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/solo_singing/solosinging-${i + 1}.jpg`,
                title: ['singing', 'singing', 'singing', 'singing'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Participants delivered soulful and powerful solo performances',
                'A diverse range of genres, from classical to contemporary, enthralled the audience',
                'Judges praised vocal talent, stage presence, and emotional connection',
                'Standout moments included high notes and heartfelt renditions'
            ]
        }
    },
    {
        title: 'CIRCUIT TRICKS',
        image: '/events/old/CIRCUIT TRICKS.png',
        date: '2024-03-14',
        time: '11:00 AM',
        venue: 'UIET, Panjab University, Chandigarh',
        description: `Get ready to spark your creativity at 'Circuit Tricks' during our annual techno-cultural fest! Test your skills by fixing pre-built circuits with various errors, ranging from easy to hard levels`,
        capacity: '100 attendees',
        gallery: {
            grid: Array(4).fill().map((_, i) => ({
                id: i + 1,
                image: `/events/glimpses/circuit_tricks/circuit-${i + 1}.jpg`,
                title: ['circuit_tricks', 'circuit_tricks', 'circuit_tricks', 'circuit_tricks'][i],
                size: ['large', 'medium', 'small', 'small'][i]
            })),
            highlights: [
                'Challenging circuit-solving tasks for tech enthusiasts',
                'Participants demonstrated creativity and precision',
                'Timed challenges kept the energy high',
                'Cultural performancesA fun and educational experience'
            ]
        }
    }
];