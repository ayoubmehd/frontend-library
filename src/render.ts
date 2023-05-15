function isState<T>(v: unknown): v is TState<T> {
    if (!v) return false;

    return typeof v === 'object' && v.hasOwnProperty('value') && v.hasOwnProperty('subscribe');   
}


export default function render<T>(vNodeElement: VNodeElement<T>): HTMLElement {
    const $el = document.createElement(vNodeElement.tagName);

    // Set attributes
    for (const [k, v] of Object.entries(vNodeElement.props || {})) {
        if (isState(v)) {
            v.subscribe({
                element: $el,
                type: k
            });
            $el.setAttribute(k, String(v.value));
            continue;
        }
        if (typeof v === 'function') {
            $el.addEventListener(k.slice(2), v);
            continue;
        }

        $el.setAttribute(k, v);
    }

    // Set children
    for (const child of vNodeElement.children) {
        if (typeof child === 'string') {
            $el.appendChild(document.createTextNode(child));
        } else if (isState(child)) {
            const $textNode = document.createTextNode(String(child.value));
            child.subscribe({
                element: $textNode,
                type: 'textContent'
            });

            $el.appendChild($textNode);
        } else {
            $el.appendChild(render(child));
        }
    }

    return $el;
}