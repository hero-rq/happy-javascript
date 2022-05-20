var arr = [ 0xAD, 0xD8, 0xCB, 0xCB, 0x9D, 0x97, 0xCB, 0xC4, 0x92, 0xA1, 0xD2, 0xD7, 0xD2, 0xD6, 0xA8, 0xA5, 0xDC, 0xC7, 0xAD, 0xA3, 0xA1, 0x98, 0x4C].reverse();
var result = [0];

function hack(a, d) {
	for (var b=0; b < 128; b++)
		if ((a+b) == d) { return b }
}

arr.forEach((e, i, a) => {
	result.push(hack(result[i] ,e));
});
console.log(result.reverse().map((e) => {return String.fromCharCode(e)}).join(''))


/*정리하자면
for i in range(len(s)):
    if (((s\[i] << 4) & 0xf0) | (s\[i] >> 4) != data\[i]):
        return False
    return True
이것과 같다.

핵스레이
for ( i = 0; i < '\x1C'; ++i )
  {
    if ( ((16 * *(a1 + i)) | (*(a1 + i) >> 4)) != byte_140003000[i] )
      return 0i64;
  }
  return 1i64;*/
