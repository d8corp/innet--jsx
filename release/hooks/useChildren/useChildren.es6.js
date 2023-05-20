import { useApp } from 'innet';

function useChildren() {
    return useApp().children;
}

export { useChildren };
