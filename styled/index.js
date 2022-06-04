const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.styles = styles;
        return el
    }
}

const title = styled("h1")`
    color: blue;
`

console.log(title);