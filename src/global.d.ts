type VNodeElement = {
    tagName: string;
    props: {
        [key: string]: string;
    };
    children: (VNodeElement | string)[];
};