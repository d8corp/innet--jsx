import { useApp } from 'innet';

function useProps() {
    return useApp().props;
}

export { useProps };
