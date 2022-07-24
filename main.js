

// const rootElement = document.getElementById('root');
// const root = ReactDom.create(rootElement);


// const content = React.createElement('h1, null', 'Hello World')
// const wrapper = React.createElement('div', {className: "wrapper",}, content);
// root.render(content)







const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)


const wrapper = React.createElement('div', { className: 'wrapper center',}, [
    React.createElement('div', { className: "grid around ",  }, [
        React.createElement('div', { className: "grid-item",}, [
            React.createElement('img', { className: "img",src: "./images/forest.jpg" }),
            React.createElement('h2', { className: "title",}, "Couldn't find a size you need"),
            React.createElement('p', { className: "text",}, "We'll work directly with you to create a fully branded packeging system"),
            React.createElement('button', { className: "btn",}, "REQUEST A QUOTE"),
        ]),
        React.createElement('div', { className: "grid-item", }, [
            React.createElement('img', { className: "img",src: "./images/forest1.jpg" }),
            React.createElement('h2', { className: "title", }, "Need a free dieline template"),
            React.createElement('p', { className: "text", }, "Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days"),
            React.createElement('button', { className: "btn", }, "REQUEST DIELINE"),
        ])
    ])
])


root.render(wrapper)


