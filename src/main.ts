import './style.css'
import createElement from './createElement.ts'
import render from './render.ts'
import mount from './mount.ts'

const root = document.getElementById('app');

if (!root) {
    throw new Error('Root element not found');
}

const vApp = createElement('div', {
    attrs: {
        id: 'app'
    },
    children: [
        'The current count is ',
        String(0)
    ],
  });

const $app = render(vApp);

mount($app, root);