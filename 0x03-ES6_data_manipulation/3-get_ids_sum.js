export default function getStudentIdsSum(arr) {
    if (Array.isArray(arr) !== true) {
        return [];
    }
    else {
        return (arr.reduce((sum, obj) => sum + obj.id, 0));
    }
}
