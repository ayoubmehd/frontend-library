type CreateElementOptions = {
    attrs?: {
        [key: string]: string;
    };
    children?: (VNodeElement | string)[];
}

export default function createElement(tagName: string, options: CreateElementOptions = {}): VNodeElement {

    return {
        tagName,
        props: options.attrs || {},
        children: options.children || [],
    };
}