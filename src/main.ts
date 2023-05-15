// import './style.css'
import h from './createElement.ts'
import render from './render.ts'
import mount from './mount.ts'
import state from './state.ts'

const root = document.getElementById('app');

if (!root) {
    throw new Error('Root element not found');
}

const counter = state(0);

const input = state('');
// TODO: fix this - when an element value chages DOM update, but when a new element is added it doesn't add a new element
const todos = state([
    'Learn HTML',
    'Learn CSS',
    'Learn JavaScript',
    'Learn TypeScript',
    'Learn React',
    'Learn Node',
    'Learn Next',
]);

// start debugging
declare global {
    interface Window {
        _counter: typeof counter;
        _todos: typeof todos;
    }   
}
window._counter = counter;
window._todos = todos;
// end debugging

const vApp = h('div', {
    attrs: {
        id: 'app'
    },
    children: [
        // h('input', {
        //     attrs: {
        //         type: 'text',
        //         value: input,
        //         oninput: (e: Event) => {
        //             const target = e.target as HTMLInputElement;
        //             input.value = target.value;
        //         },
        //     },
        // }),
        h('button', {
            attrs: {
                type: 'button',
                onclick: () => {                   
                    todos.value.push("New Todo");
                },
            },
            children: [
                "Add Todo",
            ],
        }),
        // input,
        h('ol', {
            children: todos.value.map((todo) => h('li', {
                children: [
                    todo,
                ],
            })),
        }),
        h("br"),
    ],
});

// setInterval(() => {
//     counter.value += 1;
// }, 1000);

const $app = render(vApp);

mount($app, root);