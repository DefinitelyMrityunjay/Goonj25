import { Music, Code, Gamepad } from 'lucide-react';

export const events = [
    {
        id: 1,
        title: "Groove Up",
        category: "cultural",
        date: "2025-02-19",
        time: "12:00 PM - 6:00 PM",
        location: "UIET, Chandigarh",
        description: `Get ready for Goonj 2025 and its most exhilarating event of the year – the Inter-College Dance Competition! 🎉Bring your energy, creativity, and passion for dance to the stage.`,
        prizePool: "₹10,000+",
        teamSize: "2+ members",
        registrationFee: "₹2500/- per team",
        image: "/events/new/groove_up_template.jpg",
        rules: [
            "Each team must consist of at least three members.",
            "Participants are encouraged to showcase a variety of dance styles.",
            "The judges' decisions are final and binding."
        ],
        icon: Music
    },
    {
        id: 2,
        title: "Bhangra Competition",
        category: "cultural",
        date: "2025-02-19",
        time: "5:00 PM - 10:00 PM",
        location: "UIET, Chandigarh",
        description: "Imagine this: the sound of the dhol filling the air, vibrant moves lighting up the stage, and the crowd cheering for every step. It’s not just a competition; it’s a celebration of who we are—our culture. ",
        prizePool: "₹10,000+",
        teamSize: "2+ members",
        registrationFee: "₹3000 per team",
        image: "/events/new/bhangra_template.jpg",
        rules: [
            "Each team must consist of at least three members.",
            "Teams must adhere to traditional Bhangra themes and movements while incorporating creative elements.",
            "Use of traditional Bhangra props, such as dhols, saaps, chimtas, or khundas, is allowed and encouraged.",
            "The judges' decisions are final and binding."
        ],
        icon: Music
    },
    {
        id: 3,
        title: "Nukkad Natak ",
        category: "cultural",
        date: "2024-02-19",
        time: "11:00 AM - 2:00 PM",
        location: "UIET, Chandigarh",
        description: "This is your chance to step into the soul-stirring world of street theatre, where words are powerful, emotions are raw, and every performance has the power to inspire change.",
        prizePool: "₹10,000+",
        teamSize: "2+ members",
        registrationFee: "₹2500 per team",
        image: "/events/new/nukkad_natak_template.jpg",
        rules: [
            "Performances can be in Hindi, English or a mix of both.",
            "Vulgarity or offensive content is strictly prohibited.",
            "Teams may use handheld props and costumes.",
            "Performances must adapt to an open and informal setting.",
        ],
        icon: Music
    },
    {
        id: 4,
        title: "Technovate",
        category: "technical",
        date: "2024-02-19",
        time: "6:00 PM Onwards",
        location: "UIET, Chandigarh",
        description: "Are you ready to reach for the stars and unlock the mysteries of the cosmos? UIET Chandigarh presents TECHNOVATE’25, a thrilling 24-hour hackathon powered by the GDGC Club!",
        prizePool: "₹20,000+",
        teamSize: "2-5 members",
        registrationFee: "₹300 per team",
        image: "/events/new/Technovate.jpg",
        rules: [
            "Teams: 2-5 members per team.",
            "Bring your own devices and chargers.",
            "Code of conduct must be adhered to.",
            "Submissions will be judged based on creativity, functionality, and overall execution.",
        ],
        icon: Code
    }
];