export default function getListStudentIds(arr) {
    if (Array.isArray(arr) !== true) {
        return [];
    }
    else {
        return (arr.map(function(obj) {
            return obj.id;
        }));
    }
}
