import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTodos from './todos_action/todosAction';

const TodosApp = () => {
    const { isLoading, todos, error } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    return (
        <div>
            <h1>Todos App</h1>
            {isLoading && <h3>Loading ...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos &&
                    todos.map((todo) => {
                        return (
                            <article key={todo.id}>
                                <h4>{todo.id}</h4>
                                <p>{todo.title}</p>
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default TodosApp;