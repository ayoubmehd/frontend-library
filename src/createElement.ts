type CreateElementOptions<T> = {
    attrs?: {
        [key: string]: string | TState<T> | ((e: Event) => void);
    };
    children?: (VNodeElement<T> | string | TState<T>)[];
}

export default function createElement<T>(tagName: string, options: CreateElementOptions<T> = {}): VNodeElement<T> {
    return {
        tagName,
        props: options.attrs || {},
        children: options.children || [],
    };
}