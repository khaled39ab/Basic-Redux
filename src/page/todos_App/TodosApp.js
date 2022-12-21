import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTodos from './todos_action/todosAction';
import './TodosApp.css'

const TodosApp = () => {
    const { isLoading, todos, error } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch]);

    return (
        <div>
            <h1 className='todos-title'>Todos App</h1>
            {isLoading && <h3>Loading ...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos &&
                    todos.map((todo) => {
                        return (
                            <article key={todo.id}>
                                <h4>{todo.id}</h4>
                                <h4>{todo.title}</h4>
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default TodosApp;