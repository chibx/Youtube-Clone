import { NotificationsType, type YTNotification } from "./types";

const usernames = [
    "StarryNights23",
    "TechWanderer98",
    "PixelPioneer22",
    "SunnyDreamer17",
    "EchoExplorer44",
    "UrbanNomad12",
    "CreativeSpark88",
    "NatureLover06",
    "ChillVibes2023",
    "MysticJourney55",
    "SkyHighAdventurer",
    "ArtisticSoul09",
    "GamerGuru77",
    "BookwormBabe14",
    "WanderlustSeeker1",
    "CryptoNinja99",
    "FitnessFanatic55",
    "HealthyEaterX",
    "MusicLover53",
    "DreamBigAlways",
];

const fullNames = [
    "Ella Johnson",
    "Liam Williams",
    "Sofia Martinez",
    "Mason Brown",
    "Chloe Garcia",
    "Ethan Wilson",
    "Ava Thompson",
    "Noah Anderson",
    "Isabella Taylor",
    "Lucas Robinson",
    "Zoe Scott",
    "Aiden Davis",
    "Mia Clark",
    "Oliver Miller",
    "Harper Young",
    "Jack Harris",
    "Amelia Lewis",
    "James Walker",
    "Charlotte Hall",
    "Benjamin Allen",
];

const notifTypes = [NotificationsType.CommentLike, NotificationsType.CommentRep];

export function mockNotifications(limit: number) {
    const notifs: YTNotification[] = [];

    for (let i = 0; i < limit; i++) {
        const date = new Date();
        // date.setHours(
        //     Math.floor(Math.random() * 24),
        //     Math.floor(Math.random() * 60),
        //     Math.floor(Math.random() * 60)
        // );

        // if (Math.random() > 0.0001) {
        //     date.setDate(date.getDate() - Math.floor(Math.random() * date.getDate()));
        // }

        if (Math.random() > 0.002) {
            date.setHours(date.getHours() - Math.ceil(Math.random() * date.getHours()));
        }

        if (Math.random() > 0.3) {
            date.setMinutes(date.getMinutes() - Math.ceil(Math.random() * date.getMinutes()));
        }

        if (Math.random() > 0.5) {
            date.setSeconds(date.getSeconds() - Math.ceil(Math.random() * date.getSeconds()));
        }

        // console.log(date);

        notifs.push({
            date: date,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sunt molestias dolorum aliquam veritatis officia repellat nesciunt laborum consequuntur amet. Repellat accusamus dolores esse corrupti eveniet aliquam sunt, blanditiis quam.",
            actor: usernames[Math.floor(usernames.length * Math.random())],
            type: notifTypes[Math.floor(notifTypes.length * Math.random())] as NotificationsType,
            avatarName: fullNames[Math.floor(fullNames.length * Math.random())],
            avatarImg: Math.random() > 0.6 ? "/yt-thumb.webp" : undefined,
            picture:
                Math.random() > 0.1
                    ? Math.random() > 0.5
                        ? "/9x16.webp"
                        : "16x9.webp"
                    : undefined,
        });
    }

    return notifs;
}
