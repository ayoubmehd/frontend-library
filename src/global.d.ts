type VNodeElement<T> = {
    tagName: string;
    props: {
        [key: string]: string | TState<T> | ((e: Event) => void);
    };
    children: (VNodeElement | string | TState)[];
};

type TState<T> = {
    get value(): T;
    set value(newValue: T): void;
    subscribe(subscriber: Subscriber): void;
};