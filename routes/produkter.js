var artikkel_01 = [
    {
        id: 01,
        img: 'images/produkter/img_01.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 02,
        img: 'images/produkter/img_02.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 03,
        img: 'images/produkter/img_03.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },
    {
        id: 04,
        img: 'images/produkter/img_04.jpg',
        tittel: 'US Imports',
        beskrivelse: 'Sølvpil',
        pris: 'Pris 300 -.'
    },

    {
        id: 05,
        img: 'images/produkter/img_05.jpg',
        tittel: 'US Imports',
        beskrivelse: 'Sølvpil',
        pris: 'Pris 300 -.'
    },


    {
        id: 06,
        img: 'images/produkter/img_06.jpg',
        tittel: 'US Imports',
        beskrivelse: 'Sølvpil',
        pris: 'Pris 300 -.'
    },

    {
        id: 07,
        img: 'images/produkter/img_07.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 08,
        img: 'images/produkter/img_08.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 09,
        img: 'images/produkter/img_09.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },
];



module.exports = function (app) {
    app.get('/produkter', function (reg, res) {

       
        res.render('pages/produkter', {
            artikkel_01: artikkel_01,
        })
    })
    // produkt side
    app.get('/produkt/:id', function (req, res, next) {
        app.param(['id'], function (req, res, next, value) {
            res.render('pages/produkt', {
                artikkel_01: produkter[value - 1],
            });
        });
    });
}