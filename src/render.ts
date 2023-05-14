export default function render(vNodeElement: VNodeElement): HTMLElement {
    const $el = document.createElement(vNodeElement.tagName);

    // Set attributes
    for (const [k, v] of Object.entries(vNodeElement.props.attrs || {})) {
        $el.setAttribute(k, v);
    }

    // Set children
    for (const child of vNodeElement.children) {
        if (typeof child === 'string') {
            $el.appendChild(document.createTextNode(child));
        } else {
            $el.appendChild(render(child));
        }
    }

    return $el;
}