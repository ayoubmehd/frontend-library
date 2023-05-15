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

const vApp = h('div', {
    attrs: {
        id: 'app'
    },
    children: [
        'The current count is ',
        counter,
        h('button', {
            attrs: {
                type: 'button',
                onclick: () => {
                    counter.value += 1;
                },
            },
            children: ['+'],
        }),
    ],
});
const $app = render(vApp);

mount($app, root);