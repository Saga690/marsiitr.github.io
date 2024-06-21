export const validCommands = ['clear', 'help', 'commands', 'about',
    'hello', 'git', 'home',
    'kill', 'cd projects', 'cd gallery',
    'cd contact', 'hack',
    'social insta', 'social youtube', 'social discord', 'social linkedin',
    '',
    'surprise me',
    '0'
];

export const imageToo = ['hello', 'kill', 'cd projects', 'cd gallery', 'cd contact'];

export let consoleData = {
    '0': [],
    'about': [{
        'text': "> We are a bunch of students united by our passion for innovation", 'color': '#A1E3B6'
    },
        {'text': "and technology, driving the Models and Robotics Club forward. ", 'color': "#A1E3B6"},
        {'text': "With hands-on projects and collaborative learning, we explore", 'color': "#A1E3B6"},
        {'text': "the fascinating realms of robotics and modeling.", 'color': "#A1E3B6"}
    ],
    'help': [{
        'text': '> Type “commands” into the terminal and hit enter to', 'color': '#A1E3B6'
    }, {
        'text': 'see all the possible commands', 'color': '#A1E3B6'
    }],
    'clear': [],
    'hello': [{
        'text': "Hello, babygirl! 🥰", 'color': '#FFFF00'
    }],
    'git': [{
        'text': "Opening GitHub on port 3000 in 0...", 'color': '#20D6A5', 'class': 'github-port'
    }],
    'kill': [{'text': 'goodbye cruel world! 💀', 'color': 'red'}],
    'cd gallery': [{'text': 'Sorry, interface not built yet. 🤒', 'color': '#FFFF00'}],
    'cd projects': [{'text': 'Sorry, interface not built yet. 🤒', 'color': '#FFFF00'}],
    'cd contact': [{'text': 'Sorry, interface not built yet. 🤒', 'color': '#FFFF00'}],
    'social youtube': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'social insta': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'social linkedin': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'social discord': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'hack': [{
        'text': "I'm just a dumb and cute terminal built using HTML!",
        'color': '#F45AED'
    }, {'text': "So haxer, you canny hack meh bitch! 🤙", 'color': '#F45AED'}],
    'commands': [
        {'text': 'Available Commands: ', 'color': '#F45AED'},

        {'text': 'commands', 'color': '#1142CC'},
        {'text': 'home', 'color': '#1142CC'},
        {'text': 'about', 'color': '#1142CC'},
        {'text': 'hello', 'color': '#1142CC'},
        {'text': 'git', 'color': '#1142CC'},
        {'text': 'cd {projects, gallery, contact}', 'color': '#1142CC'},
        {'text': 'social {insta, discord, linkedin, youtube}', 'color': '#1142CC'},
        {'text': 'hack', 'color': '#1142CC'},
        {'text': 'kill', 'color': '#1142CC'},
        {'text': 'clear', 'color': '#1142CC'},
        // {'text': 'surprise me', 'color': '#1142CC'},
    ],
    'surprise me': [
        {'text': "HUE HUE HUE", 'color': ""}
    ]
}