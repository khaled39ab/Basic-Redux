import React from 'react';

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
                    </q>
                    <br /> <br />

                    <strong>Normally:</strong> <br />
                    Redux is a small JS Library. It's for managing medium/large amount of states globally in your app.
                </p>

            </div>
            <div>
                <h1 style={{ 'textAlign': 'center' }}>Why Redux?</h1>
                <ul>
                    <li>The store of the whole application is stored in an object tree within a single store.</li>
                    <li>The only way to change state is to emit an action, an object describing what happened.</li>
                    <li>To specify how the state tree is transformed by action, you write pure reducers.</li>
                </ul>
            </div>
        </div>
    );
};

export default Theory;