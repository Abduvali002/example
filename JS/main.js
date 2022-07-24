

// const rootElement = document.getElementById('root');
// const root = ReactDom.create(rootElement);


// const content = React.createElement('h1, null', 'Hello World')
// const wrapper = React.createElement('div', {className: "wrapper",}, content);
// root.render(content)







// const rootElement = document.getElementById('root')
// const root = ReactDOM.createRoot(rootElement)


// const wrapper = React.createElement('div', { className: 'wrapper center',}, [
//     React.createElement('div', { className: "grid around ",  }, [
//         React.createElement('div', { className: "grid-item",}, [
//             React.createElement('img', { className: "img",src: "./images/forest.jpg" }),
//             React.createElement('h2', { className: "title",}, "Couldn't find a size you need"),
//             React.createElement('p', { className: "text",}, "We'll work directly with you to create a fully branded packeging system"),
//             React.createElement('button', { className: "btn",}, "REQUEST A QUOTE"),
//         ]),
//         React.createElement('div', { className: "grid-item", }, [
//             React.createElement('img', { className: "img",src: "./images/forest1.jpg" }),
//             React.createElement('h2', { className: "title", }, "Need a free dieline template"),
//             React.createElement('p', { className: "text", }, "Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days"),
//             React.createElement('button', { className: "btn", }, "REQUEST DIELINE"),
//         ])
//     ])
// ])


// root.render(wrapper)





// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// const image = './images/Shakl.jpg';

// const styles = {
//     container: {
//         border: "10px solid red",
//         padding: "1rem",
//         fontSize: '1.5rem'
//     },
//     image: {
//         width: '100%'
//     }
// };

// const readyContent = React.createElement ('div', {className: 'container', style: styles.container},  [
//     React.createElement('img', {src: image, alt: "shakl", style: styles.image} ),

// ])

// root.render(readyContent)







const root = ReactDOM.createRoot(document.getElementById('root'));
const image = './images/pokemon.png';
const image1 = './images/Gras,fire.png';


const styles = {
    image: {
        width: '1000px',
        height: '60%'
    },

}

const cardHeader = React.createElement('div', { className: "card-header" }, [
    React.createElement('img', { src: image1, className: 'card-image', alt: 'gras,fire' })
]);

const cardBody = React.createElement('div', { className: 'card-body' }, [
    React.createElement('h2', { className: 'body-title' }, "Pokemons"),
    React.createElement('p', { className: 'body-text' }, "Grass, Poison")
]);

const cardFooter = React.createElement('div', { className: 'card-footer' }, [
    React.createElement('p', null, '6,9kg'),
    React.createElement('p', { className: 'age' }, "99 age")
]);

const Main = React.createElement('div', { className: 'main' }, [
    React.createElement('div', { className: 'beginning' },
        React.createElement('img', { src: image, className: 'logotip', style: styles.image })
    ),
    [
        React.createElement('div', { className: 'forms' }, [
            React.createElement('button', { className: 'btn' }, "Gross"),
            React.createElement('button', { className: 'btn' }, "Search"),
            React.createElement('button', { className: 'btn' }, "Aa-Zz"),
            React.createElement('button', { className: 'btn' }, "Button"),
        ])
    ],

    [
        React.createElement('div', { className: 'cards' },
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardHeader, cardBody, cardFooter
            ])
            ],

        )
    ]




])

root.render(Main)