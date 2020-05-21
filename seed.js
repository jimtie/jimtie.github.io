const db = require('./models');

const users = [
    {
        name: 'Bob',
        email: 'bob@gmail.com',
        phone: '415-777-7777',
        zipcode: '94111',
        pic: 'https://images.unsplash.com/photo-1545231584-45aac96e37d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'
    },
    {
        name: 'Daphne',
        email: 'daphne@gmail.com',
        phone: '415-666-7777',
        zipcode: '94111',
        pic: 'https://images.unsplash.com/photo-1579034628318-b14c8ab399a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'
    },
    {
        name: 'Jo',
        email: 'jo@gmail.com',
        phone: '415-555-7777',
        zipcode: '94222',
        pic: 'https://images.unsplash.com/photo-1541112324160-e8a425b58dac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'
    },
    {
        name: 'Uneeq',
        email: 'uneeq@gmail.com',
        phone: '415-999-7777',
        zipcode: '94111',
        pic: 'https://images.unsplash.com/photo-1559024922-9ade05850615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'
    },
    {
        name: 'Hamza',
        email: 'hamza@hotmail.com',
        phone: '415-888-7777',
        zipcode: '94222',
        pic: 'https://images.unsplash.com/photo-1555620535-58093c34ea13?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'
    }
];

// https://source.unsplash.com/300x300/?face

const toys = [
    {
        title: 'social media kit',
        description: 'Quis velit ex exercitation do veniam nulla aliqua magna deserunt nostrud et in duis. Enim ea eiusmod et qui ullamco laborum aute ipsum. Sit veniam voluptate tempor nostrud nulla voluptate dolore incididunt et.',
        images: ['https://images.unsplash.com/photo-1569775126345-c5222baf55a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: 'Priceless',
        ageTag: '0+',
        genderTag: 'all'
    },
    {
        title: 'lego emoji',
        description: 'Commodo enim consectetur elit commodo nisi dolor qui sunt eiusmod in fugiat. Non Lorem laboris consectetur do excepteur ut occaecat id cillum sunt enim veniam. Velit velit ullamco sit esse irure. Et quis nisi anim nisi amet enim ut nostrud fugiat enim nisi enim aute. Sit ea in culpa ex ex dolore Lorem exercitation veniam culpa deserunt occaecat duis.',
        images: ['https://images.unsplash.com/photo-1560529177-261a781ad3b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: '$18.00',
        ageTag: '5+',
        genderTag: 'all'
    },
    {
        title: 'steampunk mario figurines',
        description: 'Voluptate sit consequat cupidatat nulla id in consectetur amet qui commodo pariatur. Sunt tempor non amet non eu do amet culpa. Exercitation in commodo dolor officia elit exercitation nulla tempor. Dolor nulla est duis occaecat et do labore. Sunt magna quis duis voluptate cupidatat.',
        images: ['https://images.unsplash.com/photo-1566576912302-723145d39b00?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: '$40.00',
        ageTag: '2+',
        genderTag: 'girls'
    },
    {
        title: 'lego darth vader',
        description: 'Qui adipisicing voluptate nostrud cupidatat amet laborum ea commodo officia magna velit fugiat elit. Adipisicing fugiat cillum fugiat nostrud ex reprehenderit non elit dolor. Exercitation enim aliqua sit do commodo. Ipsum et culpa ipsum officia cillum nostrud est incididunt. Quis aliqua incididunt ad id labore.',
        images: ['https://images.unsplash.com/photo-1517242027094-631f8c218a0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: '$15.00',
        ageTag: '5+',
        genderTag: 'all'
    },
    {
        title: 'rusty jeep',
        description: 'Et proident aliqua elit occaecat amet eiusmod nostrud commodo enim tempor laboris anim. Sit ipsum magna anim et non incididunt excepteur laboris ipsum id duis labore elit aliqua. Do nisi id aute id ad mollit. Ut aliquip commodo do labore. Officia nostrud adipisicing duis irure sit anim culpa.',
        images: ['https://images.unsplash.com/photo-1534251019763-5a18f8999cc0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: 'Free',
        ageTag: '10+',
        genderTag: 'girls'
    },
    {
        title: 'zoo animals',
        description: 'Lorem proident esse ex excepteur. In aliqua cillum eu exercitation dolore mollit. Deserunt irure in eu duis. In nostrud proident velit irure adipisicing. Incididunt fugiat anim proident sint esse minim consequat sunt.',
        images: ['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
        price: '$5.00',
        ageTag: '0+',
        genderTag: 'all'
    },
    {
        title: 'creepy dolls',
        description: 'Dolore sit duis proident consectetur Lorem laboris nulla enim adipisicing. Cupidatat dolor incididunt consectetur enim laboris. Amet velit irure magna reprehenderit id mollit cillum ullamco nulla mollit ea mollit. Dolore incididunt aute eiusmod quis veniam esse sit laboris qui. In labore dolor reprehenderit minim reprehenderit nostrud pariatur sint ipsum occaecat adipisicing est in laboris. Mollit eu cillum ut ex incididunt irure in voluptate ad ullamco.',
        images: ['https://images.unsplash.com/photo-1514313841118-4b0b61788b36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: 'Free',
        ageTag: '3+',
        genderTag: 'boys'
    },
    {
        title: 'retro cars',
        description: 'Et commodo consectetur tempor commodo incididunt do. Laborum commodo ipsum eu magna laborum nisi esse quis. Aliqua anim cupidatat qui commodo deserunt ex amet enim do officia voluptate quis nostrud irure. Laboris ipsum occaecat deserunt ea aliquip est et id. Ea officia eu ad nostrud. Dolore incididunt labore veniam officia ut est mollit aliquip.',
        images: ['https://images.unsplash.com/photo-1559761802-58bfe58ea7a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: '$20.00',
        ageTag: '5+',
        genderTag: 'girls'
    },
    {
        title: 'captain america',
        description: 'Tempor ut cupidatat ad sunt do anim anim.',
        images: ['https://images.unsplash.com/photo-1573405202162-52ba7a3e0377?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: '$3.99',
        ageTag: '3+',
        genderTag: 'girls'
    },
    {
        title: 'head in a lego desert',
        description: 'Esse ipsum adipisicing pariatur id sit laboris duis consectetur Lorem nisi Lorem elit.',
        images: ['https://images.unsplash.com/photo-1576234433118-5839cb2f6450?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: 'Free',
        ageTag: '5+',
        genderTag: 'all'
    },
    {
        title: 'so many lego people',
        description: 'Elit est dolor ad laborum ipsum cupidatat ad laboris magna Lorem amet dolor in nostrud.',
        images: ['https://images.unsplash.com/photo-1520627977056-c307aeb9a625?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: '$15.00',
        ageTag: '5+',
        genderTag: 'all'
    },
    {
        title: 'lego tower',
        description: 'Est aliqua Lorem commodo incididunt reprehenderit nisi minim non voluptate.',
        images: ['https://images.unsplash.com/photo-1575650980117-a9383476a9b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300'],
        price: 'Free',
        ageTag: '3+',
        genderTag: 'all'
    }
];

// https://source.unsplash.com/600x600/?toys

const bigToys = [{
    title: 'sonic and friends',
    description: 'Irure ex tempor nostrud et proident. Velit duis eu sint ad amet magna voluptate. Adipisicing aliqua exercitation cupidatat amet anim et sit proident exercitation reprehenderit. Anim ut consequat veniam mollit amet officia esse veniam tempor ipsum mollit. Id commodo enim velit do consectetur aute ad consectetur officia aliqua. Id ea in velit in anim cupidatat in anim amet cupidatat. Fugiat est dolore aliqua deserunt velit excepteur qui elit aliqua velit enim consequat ullamco.',
    images: ['https://images.unsplash.com/photo-1566577134665-2c674085abf7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$7.00',
    ageTag: '3+',
    genderTag: 'all'
},
{
    title: 'dog toys',
    description: 'Officia quis cillum dolore tempor ad cillum dolore laboris cillum exercitation do. Eiusmod anim adipisicing adipisicing voluptate tempor exercitation ad esse amet consequat labore adipisicing. Do exercitation qui cupidatat aliquip. Culpa ad anim fugiat dolor esse veniam ipsum exercitation quis consectetur. Pariatur et nulla minim cillum cupidatat aliqua ad deserunt. Nostrud id veniam officia nulla ut consectetur incididunt aute.',
    images: ['https://images.unsplash.com/photo-1518108621213-2be030acb267?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$11.00',
    ageTag: '0+',
    genderTag: 'all'
},
{
    title: 'ballooons',
    description: 'Sint ad est officia eu consequat consequat sunt Lorem sit eu eiusmod nisi quis id. Et elit cupidatat dolor consequat elit ea sint. Minim enim magna ut tempor. Amet reprehenderit sit reprehenderit eu proident irure est ipsum laboris.',
    images: ['https://images.unsplash.com/photo-1533759064802-4a1671cab042?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$8.00',
    ageTag: '2+',
    genderTag: 'all'
},
{
    title: "my great-grandmother's toys",
    description: 'Enim est nulla nisi veniam excepteur duis anim nisi adipisicing culpa. Officia ut dolore laboris enim adipisicing. Aute fugiat exercitation excepteur pariatur proident mollit Lorem nulla cillum et dolor ipsum officia. Eu ad in nisi laborum ullamco ex cillum veniam aliqua. Aute do quis labore tempor officia. Aliquip officia elit dolor anim aliqua est occaecat officia. Nostrud dolore dolore dolor velit ut esse exercitation ad veniam.',
    images: ['https://images.unsplash.com/photo-1543590172-e2bf4f8dbaa0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$200.00',
    ageTag: '10+',
    genderTag: 'all'
},
{
    title: 'a stolen arcade game',
    description: 'Cillum labore excepteur ad veniam duis ex eiusmod culpa consequat fugiat et duis eu. Dolore laborum sunt culpa enim ipsum aute nulla. Sit proident nisi sint consectetur sunt laboris. Sunt veniam veniam reprehenderit ex excepteur ea irure sunt sint laboris excepteur. Fugiat id eu sint ipsum ullamco amet id enim do labore magna.',
    images: ['https://images.unsplash.com/photo-1476239976176-3926022cbd91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$50.00',
    ageTag: '5+',
    genderTag: 'all'
},
{
    title: 'WWII figurines',
    description: 'Qui cillum voluptate dolore sit veniam aliquip. Proident nisi ullamco irure nulla aute proident commodo. Eiusmod id eiusmod minim deserunt minim minim aliqua irure laborum culpa nisi cupidatat. Do reprehenderit tempor est enim et amet Lorem laboris ipsum veniam ullamco nisi enim eu. Ad deserunt id nulla fugiat nisi ex. Irure aliqua consectetur mollit minim consequat ex id ipsum quis anim dolor. Laboris ipsum occaecat exercitation pariatur ipsum dolor sint eu commodo magna ullamco ea laboris nostrud.',
    images: ['https://images.unsplash.com/photo-1579584860661-ff1faf8eaeb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$20.00',
    ageTag: '5+',
    genderTag: 'all'
},
{
    title: 'baby jenga',
    description: 'Ipsum culpa qui ex exercitation esse laboris nisi in magna ipsum ad reprehenderit fugiat magna. Et aliqua veniam voluptate ullamco magna nisi officia commodo ea nulla consectetur minim ad. Eu fugiat cillum occaecat aliqua nisi cupidatat dolor.',
    images: ['https://images.unsplash.com/photo-1501686637-b7aa9c48a882?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$9.00',
    ageTag: '0+',
    genderTag: 'all'
},
{
    title: 'robo incubator',
    description: 'Duis sunt cupidatat ullamco minim nulla ipsum ea. Dolore consectetur ipsum non consequat exercitation quis cillum laboris. Consequat pariatur ad ex velit culpa. Elit minim commodo est Lorem pariatur ipsum elit enim.',
    images: ['https://images.unsplash.com/photo-1573743983191-18d885f56f36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600'],
    price: '$29.00',
    ageTag: '5+',
    genderTag: 'all'
}];

const addSmallImgLink = (obj) => {
    let newLink = obj.images[0].replace(/600/g, '300');
    obj.images.unshift(newLink);
    return obj;
};

const addLargeImgLink = (obj) => {
    let newLink = obj.images[0].replace(/300/g, '600');
    obj.images.push(newLink);
    return obj;
};

let toysNew = toys.map(obj => addLargeImgLink(obj));
let bigToysNew = bigToys.map(obj => addSmallImgLink(obj));

let allToys = toysNew.concat(bigToysNew);

// console.log(allToys.length);

let n = 0;
let i = 0;

let createOneProfile = () => {
    db.Toy.create(allToys[i++], (err, toyOne) => {
        if (err) return console.error(err);
        db.Toy.create(allToys[i++], (err, toyTwo) => {
            if (err) return console.error(err);
            db.Toy.create(allToys[i++], (err, toyThree) => {
                if (err) return console.error(err);
                db.Toy.create(allToys[i++], (err, toyFour) => {
                    if (err) return console.error(err);
                    db.Profile.create(users[n++], async (err, profile) => {
                        try {
                            await profile.toys.push(toyOne, toyTwo, toyThree, toyFour);
                        } catch(err) {
                            console.error(err);
                        } finally {
                            profile.save((err, savedprofile) => {
                                if (err) return console.error(err);
                                console.log(savedprofile);
                            });
                        }
                    })
                })
            })
        })
    })
};

// run node seed in terminal to
// clear & seed database
db.Profile.deleteMany({}, (err, result) => {
    if (err) return console.error(err);
    console.log(`Deleted ${result.deletedCount} profiles.`);

    db.Toy.deleteMany({}, (err, result) => {
        if (err) return console.error(err);
        console.log(`Deleted ${result.deletedCount} toys.`);
        
        createOneProfile();
        createOneProfile();
        createOneProfile();
        createOneProfile();
        createOneProfile();
    });
});

// Ctrl + c in terminal to exit node shell once database is seeded
