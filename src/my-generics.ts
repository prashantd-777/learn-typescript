function identityOne(val: string) : string {
    return val;
}

function identityTwo<Type>(val: Type): Type {
    return val;
}


const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 0;
    return products[myIndex];
}

getMoreSearchProducts([1, 2]);