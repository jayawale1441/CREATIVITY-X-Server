const motionRelatedWords = ["move", "moving", "dance", "dancing", "run", "running", "walk", "walking", "shift", "shifting", "glide", "gliding", "slide", "sliding", "roll", "rolling", "spin", "spinning", "rotate", "rotating", "swing", "swinging", "flow", "flowing", "zoom", "zooming", "dash", "dashing", "sprint", "sprinting", "drift", "drifting", "jump", "jumping", "bounce", "bouncing"];

// const danceRelatedWords = ['dance', 'dancing'];

const imageJpeg = [
    // Person and Charactor
    {
        'search_val': 'couple',
        'image': `images/jpeg/couple.jpeg`
    },
    {
        'search_val': 'sample',
        'image': `images/jpg/sample.jpg`
    },
    {
        'search_val': 'vr',
        'image': `images/jpeg/vr.jpeg`
    },
    {
        'search_val': 'setellite',
        'image': `images/jpeg/setellite.jpeg`
    },
    {
        'search_val': 'server',
        'image': `images/jpeg/server.jpeg`
    },
    {
        'search_val': 'model',
        'image': `images/jpeg/model.jpeg`
    },
    {
        'search_val': 'warrior',
        'image': `images/jpeg/warrior.jpeg`
    },
    {
        'search_val': 'robot',
        'image': `images/jpeg/robot.jpeg`
    },
    {
        'search_val': 'super hero',
        'image': `images/jpeg/super hero.jpeg`
    },
    {
        'search_val': 'fairy',
        'image': `images/jpeg/fairy.jpeg`
    },
    {
        'search_val': 'witch',
        'image': `images/jpeg/witch.jpeg`
    },
    {
        'search_val': 'angel',
        'image': `images/jpeg/angel.jpeg`
    },
    //Animals
    {
        'search_val': 'lion',
        'image': `images/jpeg/lion.jpeg`
    },
    {
        'search_val': 'wolf',
        'image': `images/jpeg/wolf.jpeg`
    },
    {
        'search_val': 'horse',
        'image': `images/jpeg/horse.jpeg`
    },
    {
        'search_val': 'elephant',
        'image': `images/jpeg/elephant.jpeg`
    },
    {
        'search_val': 'panda',
        'image': `images/jpeg/panda.jpeg`
    },
    {
        'search_val': 'fox',
        'image': `images/jpeg/fox.jpeg`
    },
    {
        'search_val': 'dragon',
        'image': `images/jpeg/dragon.jpeg`
    },
    {
        'search_val': 'kiss',
        'image': `images/jpeg/kiss.jpeg`
    },
    {
        'search_val': 'hug',
        'image': `images/jpeg/hug.jpeg`
    },
    {
        'search_val': 'pari',
        'image': `images/jpeg/pari.jpeg`
    },
    {
        'search_val': 'building',
        'image': `images/jpeg/building.jpeg`
    },
    {
        'search_val': 'chear',
        'image': `images/jpeg/chear.jpeg`
    },
    {
        'search_val': 'gun',
        'image': `images/jpeg/gun.jpeg`
    },
    {
        'search_val': 'laptop',
        'image': `images/jpeg/laptop.jpeg`
    },
    {
        'search_val': 'mobile',
        'image': `images/jpeg/mobile.jpeg`
    },
    {
        'search_val': 'sword',
        'image': `images/jpeg/sword.jpeg`
    },
    {
        'search_val': 'ballon',
        'image': `images/jpeg/ballon.jpeg`
    },
    {
        'search_val': 'beach',
        'image': `images/jpeg/beach.jpeg`
    },
    {
        'search_val': 'betty boop',
        'image': `images/jpeg/betty boop.jpeg`
    },
    {
        'search_val': 'bugy bunny',
        'image': `images/jpeg/bugy bunny.jpeg`
    },
    {
        'search_val': 'camera',
        'image': `images/jpeg/camera.jpeg`
    },
    {
        'search_val': 'car',
        'image': `images/jpeg/car.jpeg`
    },
    {
        'search_val': 'castle',
        'image': `images/jpeg/castle.jpeg`
    },
    {
        'search_val': 'clock',
        'image': `images/jpeg/clock.jpeg`
    },
    {
        'search_val': 'forest',
        'image': `images/jpeg/forest.jpeg`
    },
    {
        'search_val': 'desert',
        'image': `images/jpeg/desert.jpeg`
    },
    {
        'search_val': 'clock',
        'image': `images/jpeg/clock.jpeg`
    },
    //sample time
    {
        'search_val': 'cat',
        'image': `images/jpeg/cat.jpeg`
    },
    {
        'search_val': 'baby',
        'image': `images/jpeg/baby.jpeg`
    },
    {
        'search_val': 'man',
        'image': `images/jpeg/man.jpeg`
    },
    {
        'search_val': 'woman',
        'image': `images/jpeg/woman.jpeg`
    },
    {
        'search_val': 'alien',
        'image': `images/jpeg/alien.jpeg`
    },
    {
        'search_val': 'dog',
        'image': `images/jpeg/dog.jpeg`
    },
    {
        'search_val': 'cheer',
        'image': `images/jpeg/cheer.jpeg`
    },
    {
        'search_val': 'boy with bike',
        'image': `images/jpeg/boy with bike.jpeg`
    },
    {
        'search_val': 'dollphin',
        'image': `images/jpeg/dollphin.jpeg`
    },
    {
        'search_val': 'ghibli',
        'image': `images/jpeg/ghibli.jpeg`
    },
    {
        'search_val': 'girl',
        'image': `images/jpeg/girl.jpeg`
    },
    {
        'search_val': 'virat',
        'image': `images/jpeg/virat.jpeg`
    },
    {
        'search_val': 'rain',
        'image': `images/jpeg/rain.jpeg`
    },
    {
        'search_val': 'tiger',
        'image': `images/jpeg/tiger.jpeg`
    },
    {
        'search_val': 'tom and jerry',
        'image': `images/jpeg/tom and jerry.jpeg`
    },
    {
        'search_val': 'tom & jerry',
        'image': `images/jpeg/tom and jerry.jpeg`
    },
    {
        'search_val': 'heena',
        'image': `images/jpeg/heena.jpeg`
    },
    {
        'search_val': 'smilling',
        'image': `images/jpeg/smilling.jpeg`
    },

    // 5. Fantasy / Sci-fi items
    {
        'search_val': 'ai',
        'image': `images/jpeg/ai.jpeg`
    },
    {
        'search_val': 'computer',
        'image': `images/jpeg/computer.jpeg`
    },
    {
        'search_val': 'crystal',
        'image': `images/jpeg/crystal.jpeg`
    },
    {
        'search_val': 'cyborg',
        'image': `images/jpeg/cyborg.jpeg`
    },
    {
        'search_val': 'drone',
        'image': `images/jpeg/drone.jpeg`
    },
    {
        'search_val': 'fireball',
        'image': `images/jpeg/fireball.jpeg`
    },
    {
        'search_val': 'galaxy',
        'image': `images/jpeg/galaxy.jpeg`
    },
    {
        'search_val': 'machine',
        'image': `images/jpeg/machine.jpeg`
    },
    {
        'search_val': 'magic',
        'image': `images/jpeg/magic.jpeg`
    },
    {
        'search_val': 'phoenix',
        'image': `images/jpeg/phoenix.jpeg`
    },
    {
        'search_val': 'planet',
        'image': `images/jpeg/planet.jpeg`
    },
    {
        'search_val': 'portal',
        'image': `images/jpeg/portal.jpeg`
    },
    {
        'search_val': 'ufo',
        'image': `images/jpeg/ufo.jpeg`
    },
    //5. jung food and characters
    {
        'search_val': 'bumrah',
        'image': `images/jpeg/bumrah.jpeg`
    },
    {
        'search_val': 'burgar',
        'image': `images/jpeg/burgar.jpeg`
    },
    {
        'search_val': 'hardik pandya',
        'image': `images/jpeg/hardik pandya.jpeg`
    },
    {
        'search_val': 'idali',
        'image': `images/jpeg/idali.jpeg`
    },
    {
        'search_val': 'jenifar vinget',
        'image': `images/jpeg/jenifar vinget.jpeg`
    },
    {
        'search_val': 'juice',
        'image': `images/jpeg/juice.jpeg`
    },
    {
        'search_val': 'madhuri dixit',
        'image': `images/jpeg/madhuri dixit.jpeg`
    },
    {
        'search_val': 'mohsin khan',
        'image': `images/jpeg/mohsin khan.jpeg`
    },
    {
        'search_val': 'mouni roy',
        'search_val': 'moni',
        'image': `images/jpeg/mouni roy.jpeg`
    },
    {
        'search_val': 'ms dhoni',
        'search_val': 'dhoni',
        'image': `images/jpeg/ms dhoni.jpeg`
    },
    {
        'search_val': 'noodles',
        'image': `images/jpeg/noodles.jpeg`
    },
    {
        'search_val': 'pizza',
        'image': `images/jpeg/pizza.jpeg`
    }
];

const imageGif = [
    //// 5. Fantasy / Sci-fi items
    {
        'search_val': 'ufo',
        'image': `images/gif/ufo.gif`
    },

    {
        'search_val': 'vr',
        'image': `images/gif/vr.gif`
    },

    {
        'search_val': 'ai',
        'image': `images/gif/ai.gif`
    },
    {
        'search_val': 'computer',
        'image': `images/gif/computer.gif`
    },

    {
        'search_val': 'crystal',
        'image': `images/gif/crystal.gif`
    },
    {
        'search_val': 'cyborg',
        'image': `images/gif/cyborg.gif`
    },
    {
        'search_val': 'drone',
        'image': `images/gif/drone.gif`
    },
    {
        'search_val': 'fireball',
        'image': `images/gif/fireball.gif`
    },
    {
        'search_val': 'galaxy',
        'image': `images/gif/galaxy.gif`
    },
    {
        'search_val': 'hologram',
        'image': `images/gif/hologram.gif`
    },
    {
        'search_val': 'machine',
        'image': `images/gif/machine.gif`
    },
    {
        'search_val': 'magic',
        'image': `images/gif/magic.gif`
    },
    {
        'search_val': 'phoenix',
        'image': `images/gif/phoenix.gif`
    },
    {
        'search_val': 'planet',
        'image': `images/gif/planet.gif`
    },
    {
        'search_val': 'portal',
        'image': `images/gif/portal.gif`
    },
    {
        'search_val': 'robot',
        'image': `images/gif/robot.gif`
    },
    {
        'search_val': 'server',
        'image': `images/gif/server.gif`
    },
    {
        'search_val': 'setellite',
        'image': `images/gif/setellinte.gif`
    },
    //things
    {
        'search_val': 'building',
        'image': `images/gif/building.gif`
    },
    {
        'search_val': 'chear',
        'image': `images/gif/chear.gif`
    },
    {
        'search_val': 'gun',
        'image': `images/gif/gun.gif`
    },
    {
        'search_val': 'laptop',
        'image': `images/gif/laptop.gif`
    },
    {
        'search_val': 'mobile',
        'image': `images/gif/mobile.gif`
    },
    {
        'search_val': 'sword',
        'image': `images/gif/sword.gif`
    },
    //wrong image please change it
    {
        'search_val': 'server',
        'image': `images/gif/server.gif`
    },
    {
        'search_val': 'setellite',
        'image': `images/gif/setellite.gif`
    },
    //Characters/Persons
    {
        'search_val': 'fairy',
        'image': `images/gif/fairy.gif`
    },
    {
        'search_val': 'heena',
        'image': `images/gif/heena.gif`
    },
    {
        'search_val': 'sample',
        'image': `images/mp4/sample.mp4`
    },
    {
        'search_val': 'baby',
        'image': `images/gif/baby.gif`
    },
    {
        'search_val': 'couple',
        'image': `images/gif/couple.gif`
    },
    {
        'search_val': 'kiss',
        'image': `images/gif/kiss.gif`
    },
    {
        'search_val': 'hug',
        'image': `images/gif/hug.gif`
    },
    {
        'search_val': 'model',
        'image': `images/gif/model.gif`
    },
    {
        'search_val': 'warrior',
        'image': `images/gif/warrior.gif`
    },
    {
        'search_val': 'robot',
        'image': `images/gif/robot.gif`
    },
    {
        'search_val': 'super-hero',
        'image': `images/gif/super-hero.gif`
    },
    {
        'search_val': 'fairy',
        'image': `images/gif/fairy.gif`
    },
    {
        'search_val': 'witch',
        'image': `images/gif/witch.gif`
    },
    {
        'search_val': 'angel',
        'image': `images/gif/angel.gif`
    },
    {
        'search_val': 'demon',
        'image': `images/gif/demon.gif`
    },
    //Animals
    {
        'search_val': 'wolf',
        'image': `images/gif/wolf.gif`
    },
    {
        'search_val': 'lion',
        'image': `images/gif/lion.gif`
    },
    {
        'search_val': 'horse',
        'image': `images/gif/horse.gif`
    },
    {
        'search_val': 'elephant',
        'image': `images/gif/elephant.gif`
    },
    {
        'search_val': 'panda',
        'image': `images/gif/panda.gif`
    },
    {
        'search_val': 'fox',
        'image': `images/gif/fox.gif`
    },
    {
        'search_val': 'dragon',
        'image': `images/gif/dragon.gif`
    },
    // jung food and actress 
    {
        'search_val': 'bumrah',
        'image': `images/gif/bumrah.gif`
    },
    {
        'search_val': 'burgar',
        'image': `images/gif/burgar.gif`
    },
    {
        'search_val': 'hardik pandya',
        'image': `images/gif/hardik pandya.gif`
    },
    {
        'search_val': 'idali',
        'image': `images/gif/idali.gif`
    },
    {
        'search_val': 'jenifar vinget',
        'image': `images/gif/jenifar vinget.gif`
    },
    {
        'search_val': 'juice',
        'image': `images/gif/juice.gif`
    },
    {
        'search_val': 'madhuri dixit',
        'image': `images/gif/madhuri dixit.gif`
    },
    {
        'search_val': 'mohsin khan',
        'image': `images/gif/mohsin khan.gif`
    },
    {
        'search_val': 'mouni roy',
        'image': `images/gif/mouni roy.gif`
    },
    {
        'search_val': 'dhoni',
        'search_val': 'ms dhoni',
        'image': `images/gif/ms-dhoni.gif`
    },
    {
        'search_val': 'noodles',
        'image': `images/gif/noodles.gif`
    },
    {
        'search_val': 'pizza',
        'image': `images/gif/pizza.gif`
    },
    //data
    {
        'search_val': 'ballon',
        'image': `images/gif/ballon.gif`
    },
    {
        'search_val': 'beach',
        'image': `images/gif/beach.gif`
    },
    {
        'search_val': 'betty boop',
        'image': `images/gif/betty boop.gif`
    },
    {
        'search_val': 'camera',
        'image': `images/gif/camera.gif`
    },
    {
        'search_val': 'car',
        'image': `images/gif/car.gif`
    },
    {
        'search_val': 'castle',
        'image': `images/gif/castle.gif`
    },
    {
        'search_val': 'clock',
        'image': `images/gif/clock.gif`
    },
    {
        'search_val': 'desert',
        'image': `images/gif/desert.gif`
    },
    {
        'search_val': 'cat',
        'image': `images/gif/cat.gif`
    },
    {
        'search_val': 'man',
        'image': `images/gif/man.gif`
    },
    {
        'search_val': 'baby',
        'image': `images/gif/baby.gif`
    },
    {
        'search_val': 'woman',
        'image': `images/gif/woman.gif`
    },
    {
        'search_val': 'alien',
        'image': `images/gif/alien.gif`
    },
    {
        'search_val': 'dog',
        'image': `images/gif/dog.gif`
    },
    {
        'search_val': 'cheer',
        'image': `images/gif/cheer.gif`
    },
    {
        'search_val': 'boy with bike',
        'image': `images/gif/boy with bike.gif`
    },
    {
        'search_val': 'dollphin',
        'image': `images/gif/dollphin.gif`
    },
    {
        'search_val': 'ghibli',
        'image': `images/gif/ghibli.gif`
    },
    {
        'search_val': 'girl',
        'image': `images/gif/girl.gif`
    },
    {
        'search_val': 'virat',
        'image': `images/gif/virat.gif`
    },
    {
        'search_val': 'rain',
        'image': `images/gif/rain.gif`
    },
    {
        'search_val': 'tiger',
        'image': `images/gif/tiger.gif`
    },
    {
        'search_val': 'tom and jerry',
        'image': `images/gif/tom and jerry.gif`
    },
    {
        'search_val': 'tom & jerry',
        'image': `images/gif/tom and jerry.gif`
    }
];

// const dancingGif = [
//     {
//         'search_val': 'dog',
//         'image': `images/gif/dog.gif`
//     }
// ];

module.exports = {
    motionRelatedWords,
    imageJpeg,
    imageGif,
    // danceRelatedWords, 
    // dancingGif 
};
