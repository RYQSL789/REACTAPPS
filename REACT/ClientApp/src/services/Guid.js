export function guid(len) {
    var buf = [],
        chars = 'abcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length,
        length = len || 32;

    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }

    return buf.join('');
}

export default guid;