import { useHandler } from 'innet';

function useContext(context) {
    return context.get(useHandler());
}

export { useContext };
