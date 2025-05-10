import { useApp } from 'innet';

function useChildren() {
    var _a;
    return (_a = useApp().props) === null || _a === void 0 ? void 0 : _a.children;
}

export { useChildren };
