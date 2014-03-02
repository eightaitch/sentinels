var TheWraith = {
    hero: {
        name: 'The Wraith',
        hp: 26,
        power: {
            name: 'Stealth',
            text: 'Reduce the next damage that would be dealth to The Wraith by 2.'
        }
        back: [
            'One player may play a card now.',
            'One hero regains 2 hp.',
            'Destroy an ongoing card.'
        ]
    },
    cards: [
        {
            card: {
                name: 'Combat Stance',
                type: ['ongoing', 'limited'],
                text: 'The first time The Wraith is dealth damage by a target each turn, The Wraith deals that target 2 melee damage.'
            },
            count: 2
        },
        {
            card: {
                name: 'Grappling Hook',
                type: ['one-shot'],
                text: 'Detstroy 1 ongoing or environment card.\nYou may draw a dard.'
            },
            count: 3
        }
    ]
}

