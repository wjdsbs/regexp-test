const str = `
010-1234-5678
thesecon@gmail.com
https://www.asdf.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/\b\w{2,3}\b/g)
)