export default function getStudentsByLocation(arr, city) {
    if (Array.isArray(arr) !== true) {
        return [];
    }
    else {
        return (arr.filter(function(obj) {
            return obj.location === city;
        }))
    }
}
