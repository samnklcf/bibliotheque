function buildItem(id, type, length, src, preview, link, linkText, time, seen) {
    return {
        id, type, length, src, preview, link, linkText, time, seen
    };
}

/*==================================
START THE STORIES [CIRCLES]
==================================*/
var stories = new Zuck('stories', {
    autoFullScreen: true,  // enables fullscreen on mobile browsers
    skin: 'Snapgram',
    avatars: true,
    list: false,
    openEffect: true,
    cubeEffect: true,
    backButton: false,
    backNative: false,
    localStorage: false,
    paginationArrows: false,
    paginationArrows: true,
    stories: [{
        id: 'userOne',
        photo: 'images/avatar/22.jpg',
        name: 'MelonPixel⚡',
        link: '',
        lastUpdated: 1646579345,
        items: [
            buildItem('1', 'photo', 4, 'images/other/29.jpg', '', 'page-my-profile.html', 'Visit My Profile', 1646665745, false),
            buildItem('2', 'photo', 4, 'images/other/31.jpg', '', 'https://themeforest.net/item/unic-nft-mobile-template/36083774', 'Get it Now 🚀', 1646665745, false),
            buildItem('3', 'photo', 4, 'images/other/2.jpg', '', '', '', 1646838545, false),
        ],
    },
    {
        id: 'userTwo',
        photo: 'images/avatar/14.jpg',
        name: 'Camillo Ferrari',
        link: '',
        lastUpdated: 1646673856,
        items: [
            buildItem('4', 'photo', 4, 'images/other/25.jpg', '', '', '', 1646665745, false),
        ],
    },
    {
        id: 'userThree',
        photo: 'images/avatar/8.png',
        name: 'Pingu',
        link: '',
        lastUpdated: 1646753056,
        items: [
            buildItem('5', 'photo', 4, 'images/other/4.jpg', '', '', '', 1646753056, false),
            buildItem('6', 'photo', 4, 'images/other/11.jpg', '', '', '', 1646709856, false),
        ],
    },
    {
        id: 'userFour',
        photo: 'images/avatar/3.jpg',
        name: 'Julian Co.',
        link: '',
        lastUpdated: 1646789056,
        items: [
            buildItem('7', 'photo', 4, 'images/other/10.jpg', '', '', '', 1646789056, false),
        ],
    },
    {
        id: 'userFive',
        photo: 'images/avatar/5.png',
        name: 'Tito_Calab',
        link: '',
        lastUpdated: 1646803456,
        items: [
            buildItem('8', 'photo', 4, 'images/other/17.jpg', '', '', '', 1646803456, false),
        ],
    },
    {
        id: 'userSix',
        photo: 'images/avatar/7.jpg',
        name: 'DoggieBoy',
        link: '',
        lastUpdated: 1646889856,
        items: [
            buildItem('9', 'photo', 4, 'images/other/28.jpg', '', '', '', 1646889856, false),
        ],
    },
    {
        id: 'userSeven',
        photo: 'images/avatar/9.jpg',
        name: 'Leda Beneventi',
        link: '',
        lastUpdated: 1647321856,
        items: [
            buildItem('10', 'photo', 4, 'images/other/29.jpg', '', '', '', 1647321856, false),
        ],
    }],
});