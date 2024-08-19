
function MergeCount(arrayA,arrayB) {    
    
    let posA = 0, posB = 0, invCount = 0;
    const array = [];

    
    
    while( posA < arrayA.length && posB < arrayB.length ){
        if(arrayA[posA] < arrayB[posB]){
            array.push(arrayA[posA]);
            posA += 1;
        }else{
            invCount += arrayA.length - posA;
            array.push(arrayB[posB]);
            posB += 1;
        }
    }

    
    while (posA < arrayA.length) {
        array.push(arrayA[posA]);
        posA++;
    }
    while (posB < arrayB.length) {
        array.push(arrayB[posB]);
        posB++;
    }

    return { count: invCount, sortedArray: array };
}

function SortCount(array) {
    if(array.length === 1) return { count: 0, sortedArray: array };
    
    let mid = Math.floor(array.length / 2);
    let esq = array.slice(0,mid);
    let dir = array.slice(mid);
    
    const leftResult = SortCount(esq);
    const rightResult = SortCount(dir);

    const mergeResult = MergeCount(leftResult.sortedArray, rightResult.sortedArray);
    const inv = leftResult.count + rightResult.count + mergeResult.count;

    return { count: inv, sortedArray: mergeResult.sortedArray };

}

export default function ContagemInversoes(tentativa,palavra) {
    if (palavra == null) return -1;

    const tamanho = palavra.length;
    let tentativaOrdem = Array(tamanho).fill(0);
    let tempArray = palavra.split('');

    for(let i = 0; i < tamanho; i++){
        tentativaOrdem[i] = tempArray.indexOf(tentativa[i]);
        tempArray[tempArray.indexOf(tentativa[i])] = -1;
    }

    return SortCount(tentativaOrdem);
}
