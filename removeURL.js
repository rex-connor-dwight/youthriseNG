function removeHtmlExtension(url) {
    return url.replace(/\.html$/, '');
}

// Example usage
let url = "https://youthriseng.org/publications.html";
let newUrl = removeHtmlExtension(url);