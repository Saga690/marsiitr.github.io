import React, {useEffect, useState} from "react";
import "../../styles/Console.css"
import rick from './assets/hello.gif'
import dying from './assets/dying.gif'
import insta from './assets/insta.svg'
import youtube from './assets/youtube.svg'
import linkedin from './assets/linkedin.svg'
import discord from './assets/discord.svg'
import lazy from "./assets/lazy.jpeg"
import click2 from "./assets/click-2.wav"
import click from "./assets/click.wav"


const Console = (props) => {

    const validCommands = ['clear', 'help', 'commands', 'about',
        'hello', 'git', 'home',
        'kill', 'cd projects', 'cd gallery',
        'cd contact', 'hack',
        'social insta', 'social youtube', 'social discord', 'social linkedin',
        '',
        'surprise me',
        '0'
    ];

    const imageToo = ['hello', 'kill', 'cd projects', 'cd gallery', 'cd contact'];
//We are a bunch of students united by our passion for innovation and technology, driving the Models and Robotics Club forward. With hands-on projects and collaborative learning, we explore the fascinating realms of robotics and modeling.
    let consoleData = {
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

    const playAudio = () => {
        const audio = new Audio(click2);
        audio.play();
    };


    function extras(command) {
        if (command === undefined || command === null) {
            return;
        }
        if (command === 'kill') {
            kill();
        }
        if (command === 'git') {
            git();
        }
        if (command.substring(0, 3) === 'cd ') {
            let location = command.substring(3, command.length);
            cd(location);
        }
        if (command.substring(0, 6) === 'social') {
            let location = command.substring(7, command.length);
            social(location);
        }

        let xx = display;
        xx.push('0');
        setDisplay(xx);

    }

    function git() {
        let i = 3;
        const arr = document.querySelectorAll('.github-port');
        const githubPort = arr[arr.length - 1];
        githubPort.innerHTML = "Opening GitHub on port 3000 in " + i + '...';
        let intervalID = setInterval(() => {
            i--;
            githubPort.innerHTML = "Opening GitHub on port 3000 in " + i + "...";
            if (i === 0) {
                clearInterval(intervalID);
            }
        }, 1000);
        setTimeout(() => {
            window.open("https://github.com/marsiitr", '_blank');
        }, 3000);
    }

    function kill() {
        window.close();
    }


    function cd(location) {

    }

    function social(location) {
        const social_urls = {
            'youtube': "https://www.youtube.com/channel/UCpmWMaJXu_j6YTIH8905V9Q",
            'linkedin': "https://www.linkedin.com/company/marsiitrookee",
            'insta': "https://www.instagram.com/mars_iitr",
            'discord': "https://discord.com/invite/jajRwPvnCB"
        }
        setTimeout(() => {
            console.log(location)
            window.open(social_urls[location], '_blank');

        }, 1500);
    }


    function handleEnter(e) {
        if (e.key === 'Enter') {
            let trimmedInput = inputValue.trim();
            trimmedInput = trimmedInput.toLowerCase();
            if (trimmedInput === '') {
                return;
            } else if (!validCommands.includes(trimmedInput)) {
                let x = [].concat(display);
                x.push('input-' + trimmedInput);

                if (trimmedInput.substring(0, 2) === 'cd') {
                    if (trimmedInput.length === 2 || (trimmedInput.length > 2 && trimmedInput[2] === ' ')) {
                        x.push('error-cd');
                    } else {
                        x.push('error-' + trimmedInput);
                    }
                } else {
                    x.push('error-' + trimmedInput);

                }

                if (x.length > 8) {
                    x = x.slice(x.length - 8, x.length);
                }
                setDisplay(x);
                setInputValue('');
                return;
            }
            if (trimmedInput === 'kill') {
                window.href = "kill";
            }
            if (trimmedInput === 'home') {
                setDisplay(['about', 'help']);
                setInputValue('');
                return;
            }
            if (trimmedInput === 'surprise me') {
                const urls = ['https://example.com', 'https://example.org', 'https://example.net'];
                urls.forEach(url => {
                    window.open(url, '_blank');
                });
            }


            if (trimmedInput === 'hello') {
                // const audio =  new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_1586296311.mp3");
                const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c0bdb2a2d3.mp3?filename=hello-87032.mp3");
                audio.play();
            }
            if (trimmedInput === 'clear') {
                setDisplay([]);
                setInputValue('');
                return;
            }
            let x = [].concat(display);
            x.push('input-' + trimmedInput);
            x.push(trimmedInput);

            if (x.length > 8) {
                x = x.slice(x.length - 8, x.length);
            }

            setDisplay(x);
            setInputValue('');

        }
    }

    let display = props.display;

    let setDisplay = props.setDisplay;
    const [inputValue, setInputValue] = useState('');

    function inputChange(event) {
        if (parseInt(event.target.value.length) <= 20) {
            setInputValue(event.target.value);
            playAudio();
        }
    }

    function startBlinking() {
        const cursor = document.querySelector('.input-cursor');
        cursor.style.visibility = 'visible';
    }

    function stopBlinking() {
        const cursor = document.querySelector('.input-cursor');
        cursor.style.visibility = 'hidden';

    }

    useEffect(() => {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2542/2542.wav');
    }, []);

    useEffect(() => {
        const cursor = document.querySelector('.input-cursor');
        let text = -300 + 10.3 * parseInt(inputValue.length);
        cursor.style.transform = "translate(" + text + "px, 2px)"

    }, [inputValue])

    useEffect(() => {
        const consoleBody = document.querySelector('.text-div');
        consoleBody.innerHTML = '';
        display.forEach((term) => {
            if (term === '0') return;
            if (term.substring(0, 5) === 'error') {
                let new_line = document.createElement('p');
                if (term === 'error-cd') {
                    new_line.innerText = 'invalid location! 👎';
                } else {
                    new_line.innerText = 'command: "' + term.substring(6, term.length) + '" not found';
                }
                new_line.style.color = 'red';
                new_line.classList.add('console-text');
                consoleBody.appendChild(new_line);
                let space = document.createElement('div');
                space.style.height = '40px';
                space.style.width = '100%';
                consoleBody.appendChild(space);
                return;

            } else if (term.substring(0, 5) === 'input') {
                let new_line = document.createElement('p');
                new_line.innerText = '❯ ' + term.substring(6, term.length);
                new_line.style.color = '#0f0';
                new_line.classList.add('console-text');
                consoleBody.appendChild(new_line);
                let space = document.createElement('div');
                space.style.height = '6px';
                space.style.width = '100%';
                consoleBody.appendChild(space);
                return;
            }


            consoleData[term].forEach((line) => {
                let new_line = document.createElement('p');
                new_line.innerText = line.text;
                new_line.style.color = "#A1E3B6";
                if (line.hasOwnProperty('class')) {
                    new_line.classList.add(line.class);
                }
                new_line.classList.add('console-text');
                consoleBody.appendChild(new_line);
                if (imageToo.includes(term)) {
                    let img = document.createElement('img');
                    img.classList.add('console-img');
                    img.style.height = '200px';
                    consoleBody.appendChild(img);
                    if (term === 'hello') img.src = rick;
                    else if (term === 'kill') img.src = dying;
                    else if (term.substring(0, 2) === 'cd') img.src = lazy;
                }

            })
            let space = document.createElement('div');
            space.style.height = '40px';
            space.style.width = '100%';
            consoleBody.appendChild(space);
        })
        extras(display[display.length - 1]);

    }, [display]);

    function focusfocus() {
        document.querySelector('.console-input').focus();
    }


    function openSocial(what) {
        const social_urls = {
            'youtube': "https://www.youtube.com/channel/UCpmWMaJXu_j6YTIH8905V9Q",
            'linkedin': "https://www.linkedin.com/company/marsiitrookee",
            'insta': "https://www.instagram.com/mars_iitr",
            'discord': "https://discord.com/invite/jajRwPvnCB"
        };
        window.open(social_urls[what], '_blank');

    }

    return (<div className="console">
        <div className="console-header">
            <div className="red-dot"></div>
            <div className="yellow-dot"></div>
            <div className="green-dot"></div>
        </div>
        <div className="console-body" onClick={() => focusfocus()}>
            <div>

                <div className="text-div"></div>
                <div className="input-div">
                    <span>pi@raspberrypi ~$ </span>
                    {/*<span className="console-arrow">❯</span>*/}
                    <input type="text" value={inputValue} autoFocus
                           onChange={inputChange} className="console-input"
                           autoCapitalize='off' autoComplete='off' autoCorrect='off'
                           onFocus={startBlinking} onBlur={stopBlinking}
                           onKeyDown={handleEnter}/>
                    <span className="input-cursor"></span>
                </div>
            </div>
        </div>

        <div className="console-footer">
        </div>

        <div className={"socials"}>
            <img src={insta} alt="" onClick={() => openSocial('insta')}/>
            <img src={youtube} alt="" onClick={() => openSocial('youtube')}/>
            <img src={discord} alt="" onClick={() => openSocial('discord')}/>
            <img src={linkedin} alt="" className={"linkedin"} onClick={() => openSocial('linkedin')}/>
        </div>

    </div>)
}

export default Console