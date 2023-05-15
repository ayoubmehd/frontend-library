type Subscriber = {
    element: HTMLElement;
    type: string;
};

export default function createState<T>(intValue: T): TState<T> {
    let state = intValue;

    const subscribers: Subscriber[] = [];

    return {
        get value() {
            return state;
        },
        set value(newValue: T) {
            console.log('set value', newValue);
            
            state = newValue;
            subscribers.forEach(({ element, type }) => {
                if (type === 'textContent') {
                    element.textContent = String(newValue);
                    return;
                }
                element.setAttribute(type, String(newValue));
            });
        },
        subscribe(subscriber: Subscriber) {
            subscribers.push(subscriber);
        },
    };
}