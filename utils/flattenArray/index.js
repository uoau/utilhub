function baseFlatten(){
    for (const value of array) {
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result)
            } else {
                result.push(...value)
            }
        } else if (!isStrict) {
            result[result.length] = value
        }
      }
      return result
}


function flattenArray(arr) {


}

export {
    isArray,
};
