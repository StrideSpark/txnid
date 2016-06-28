const TXNID_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

export function newTxnid(length?: number) {
    const chars = TXNID_CHARS;
    const newId: string[] = [];
    const radix = chars.length;
    const len = length || 6;

    for (let i = 0; i < len; i++) {
        newId[i] = chars[0 | Math.random() * radix];
    }

    return newId.join('');
}
