function getElementWidth(content, padding, border) {
    const elementContent = parseFloat(content);
    const elementPadding = parseFloat(padding);
    const elementBorder = parseFloat(border);
    return elementContent + elementPadding * 2 + elementBorder * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
