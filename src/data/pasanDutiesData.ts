import { BoyfriendDutyItem, PasanSoloPhotoItem } from '../types';

/**
 * Pasan's Solo Photos Scrapbook Data
 * 
 * To add/replace your own pictures of Pasan:
 * Simply drop your images into /public/images/pasan/ as pasan-01.jpg, pasan-02.jpg, etc.
 */
export const pasanSoloPhotos: PasanSoloPhotoItem[] = [
    {
        id: 'solo-01',
        title: 'The Boy Who Stole My Heart',
        caption: 'Seven years of this handsome face and that warm, comforting presence ♡',
        image: '/images/28.jpeg',
        rotation: -2.5,
        washiColor: 'burgundy',
        tag: 'My Handsome Boy',
        date: 'Forever favorite'
    },
    {
        id: 'solo-02',
        title: 'That Infectious Smile',
        caption: 'One genuine smile from him and any chaotic day turns completely peaceful.',
        image: '/images/32.jpeg',
        rotation: 1.8,
        washiColor: 'gold',
        tag: 'That Infectious Smile',
        date: 'Pure happiness'
    },
    {
        id: 'solo-03',
        title: 'Effortlessly Charming',
        caption: 'Caught in a quiet, candid moment — he doesn\'t even realise how handsome he looks.',
        image: '/images/49.jpeg',
        rotation: -1.8,
        washiColor: 'kraft',
        tag: 'Candid Cutie',
        date: 'Unfiltered'
    },
    {
        id: 'solo-04',
        title: 'My Whole Safe World',
        caption: 'Kind eyes, the gentlest soul, and the guy who always stands by my side.',
        image: '/images/43.jpeg',
        rotation: 2.2,
        washiColor: 'burgundy',
        tag: 'My Person ♡',
        date: 'Always & forever'
    }
];

/**
 * Boyfriend Duties Scrapbook Data for Pasan
 * 
 * To replace any photo, simply place your picture in /public/images/pasan/
 * with the corresponding file name (e.g. duty-01.jpg), or update the `image` path below.
 */
export const pasanBoyfriendDuties: BoyfriendDutyItem[] = [
    {
        id: 'duty-01',
        dutyNumber: 'Boyfriend Duty #01',
        title: 'When he makes sure I got home safely ♡',
        caption: 'All free time he spends with me',
        image: '/images/50.jpeg',
        stickerText: 'GPS Mode: Always On 📍',
        rotation: -2,
        washiColor: 'burgundy',
    },
    {
        id: 'duty-02',
        dutyNumber: 'Boyfriend Duty #02',
        title: 'My safe place',
        caption: 'Always makes me feel safe and calm.',
        image: '/images/29.jpeg',
        stickerText: 'worry about me : 1000/10 👂',
        rotation: 1.8,
        washiColor: 'gold',

    },
    {
        id: 'duty-03',
        dutyNumber: 'Boyfriend Duty #03',
        title: 'My calm in chaos',
        caption: 'Big sigh first, slight eye roll, and then immediately fixes whatever problem I created.',
        image: '/images/47.jpeg',
        stickerText: 'Secretly a Softie 😌',
        rotation: -1.5,
        washiColor: 'kraft',

    },
    {
        id: 'duty-04',
        dutyNumber: 'Boyfriend Duty #04',
        title: 'When he is the angriest man in the world',
        caption: 'My anger is don\'t care when he is angry, it is another dangerous story..',
        image: '/images/48.jpeg',
        stickerText: 'Ooppsss sorry baby..',
        rotation: 2.2,
        washiColor: 'gold',
    },
    {
        id: 'duty-05',
        dutyNumber: 'Boyfriend Duty #05',
        title: 'When he treats me like his baby',
        caption: 'Cutest moments with my forever guardian',
        image: '/images/46.jpeg',
        stickerText: 'Pro childish version',
        rotation: -2.5,
        washiColor: 'burgundy',

    },
    {
        id: 'duty-06',
        dutyNumber: 'Boyfriend Duty #06',
        title: 'As my videographer',
        caption: 'Always ready to capture my beauty',
        image: '/images/45.jpeg',
        stickerText: 'But badly misses my angles :(  5/1000',
        rotation: 1.5,
        washiColor: 'kraft',

    },
    {
        id: 'duty-07',
        dutyNumber: 'Boyfriend Duty #07',
        title: 'When he is my emergency problem-solver',
        caption: 'Quick mood swings and life crisis - Pasan has a tool or a plan ready.',
        image: '/images/10.jpeg',
        stickerText: 'Mr. Fix-It 🛠️',
        rotation: -1.8,
        washiColor: 'gold',
    },
    {
        id: 'duty-08',
        dutyNumber: 'Boyfriend Duty #08',
        title: 'When he puts up with my random moods',
        caption: 'Hungry Anjanaaa, sleepy queen, dramatic Anjanaaa — he handles each version.',
        image: '/images/5.jpeg',
        stickerText: 'Snack Negotiator 🍫',
        rotation: 2.4,
        washiColor: 'burgundy',
    },
    {
        id: 'duty-09',
        dutyNumber: 'Boyfriend Duty #09',
        title: 'When he faces to difficult situations because of me',
        caption: 'I know I am sometimes difficult person to handle.. but you still stand by me and face the difficult situations with me.As an evidence',
        image: '/images/52.jpeg',
        stickerText: 'Sorry Boss ',
        rotation: -1.2,
        washiColor: 'kraft',
    },
    {
        id: 'duty-10',
        dutyNumber: 'Boyfriend Duty #10',
        title: 'But he is simply… my person ♡',
        caption: 'He is my person.. my protector, my best friend, my favorite smile, and my safe place.',
        image: '/images/51.jpeg',
        stickerText: 'Certified Keeper 💍',
        rotation: 0.5,
        washiColor: 'gold',
    }
];
