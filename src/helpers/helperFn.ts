
export function createLink(question: string) {
    // replace all spaces with '+'
    const search = question.replaceAll(" ", "+");
    return `https://www.google.com/search?q=${search}`
}