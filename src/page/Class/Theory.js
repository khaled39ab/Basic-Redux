import React from 'react';
import reduxWork from './../../images/redux-work.png'

const Theory = () => {
    return (
        <div style={{ 'margin': '10px', 'border': '5px solid magenta', 'padding': '10px' }}>

            <div>
                <h1 style={{ 'textAlign': 'center' }}>What is Redux?</h1>
                <p>
                    <strong>In Redux web says: </strong> <br />
                    <q>
                        Redux is a predictable state container for JavaScript apps.
                        <br />
                        It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
                    </q> <br /> <br />

                    <strong>Normally:</strong> <br />
                    Redux is a small JS Library. It's for managing medium/large amount of states globally in our app.
                </p>
            </div>

            <div>
                <h1 style={{ 'textAlign': 'center' }}>Why Redux?</h1>
                <p>
                    <strong>Redux: Three principles</strong>
                    <ul>
                        <li>The store of the whole application is stored in an object tree within a single store.</li>
                        <li>The only way to change state is to emit an action, an object describing what happened.</li>
                        <li>To specify how the state tree is transformed by action, you write pure reducers.</li>
                    </ul>
                </p>
            </div>

            <div>
                <h1 style={{ 'textAlign': 'center' }}>When to use Redux?</h1>
                <p>
                    Not all apps need Redux. It's important to understand the kind of application we're building, the kinds of problems that you need to solve, and what tools can best solve the problems you're facing. <br /> <br />

                    <strong>Here are some scenarios when Redux might be the best solution: </strong>
                    <ul>
                        <li>When multiple components need to access the same application state.</li>
                        <li>When you're working on a large application with several other people.</li>
                        <li>When application state is updated frequently.</li>
                    </ul>
                </p>
            </div>

            <div>
                <h3 style={{ 'textAlign': 'center' }}>Some common terms related to redux</h3>
                <p>
                    <ul>
                        <li><strong>React-redux:</strong> redux is used with some common packages such as react-redux.</li>
                        <li><strong>Redux-toolkit: </strong> recommended way to write redux logic for building redux app easily and avoiding mistakes.</li>
                        <li><strong>Redux devtools extension:</strong> helps to debug redux app easily.</li>
                    </ul>
                </p>
            </div>

            <div>
                <h1 style={{ 'textAlign': 'center' }}>How Redux works?</h1>
                <p>
                    <ol>
                        <li>Define state.</li>
                        <li>Dispatch an Action.</li>
                        <li>Reducer update state based on Action Type.</li>
                        <li>store will update the view</li>
                    </ol>
                    <img style={{'width': "50%"}} src={reduxWork} alt="" />
                </p>
            </div>
        </div>
    );
};

export default Theory;