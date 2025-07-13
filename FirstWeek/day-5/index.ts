function thirdMax(nums: number[]): number {
    // Paso 1: Eliminar duplicados
    const uniqueNums = [...new Set(nums)];
    
    // Paso 2: Ordenar de mayor a menor
    uniqueNums.sort((a, b) => b - a);
    
    // Paso 3: Verificar si hay al menos 3 elementos distintos
    if (uniqueNums.length >= 3) {
        return uniqueNums[2]; // Tercer elemento después de ordenar
    } else {
        return uniqueNums[0]; // El máximo si hay menos de 3
    }
}