import './Blog.css';

import React from 'react';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1 className='blog-header'>Blog</h1>
            <article className='blog'>
                <h2>How does React JS work?</h2>
                <p>React is a javaScript library for building user-interfaces. React is a declarative, component based library used in the development of Single Page Application(SPA) which gives the maximum level of performance.React has JSX which is called JavaScript XML.It is an extension to JavaScript. JSX defines what the UI should look like.JSX comes with the full power of JavaScript because inside JSX we can write JavaScript code. We don’t need to separate markup files and logical files . Declarative views make your code more predictable and easier to debug. On the contrary components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. In react there are props and state. Props are read-only, it can not be changed and props can not be modified. Props the data parent component to child component and data flows unidirectionally. State changes can be asynchronous and State can be modified using this.setState. Data can be set and updated through this state. In React there is called Virtual DOM which is the lightweight copy of Real DOM. In the application, a virtual DOM is created in react and it is represented as a tree. Every element in the react application is a node in this tree. So, whenever a change occurs  in the state of any element, a new Virtual DOM tree is created in the react application. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and makes a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again. This process is done by the diff algorithm.</p>
            </article>
            <article className='blog'>
                <h2></h2>
                <p></p>
            </article>
            <article className='blog'>
                <h2></h2>
                <p></p>
            </article>
        </div>
    );
};

export default Blog;