window.onload = function() {
    const input = document.getElementById('markdown-input');
    const preview = document.getElementById('markdown-preview');
    let lastInput = '';

    function updatePreview() {
        const markdownText = input.value;
        if (markdownText !== lastInput) {
            preview.innerHTML = marked.parse(markdownText);
            lastInput = markdownText;
        }
    }

    setInterval(updatePreview, 1000);
};

function addBold() {
    insertText('**bold text**');
}

function addItalic() {
    insertText('_italic text_');
}

function addHeading() {
    insertText('# Heading 1');
}

function addImage() {
    insertText('![alt text](image-url)');
}

function addLink() {
    insertText('[link text](url)');
}

function addcode() {
    insertText('```md');
    insertText('Code Block');
    insertText('```');
}

function insertText(markdown) {
    const input = document.getElementById('markdown-input');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const text = input.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);

    const newLine = (before && !before.endsWith('\n')) ? '\n\n' : '';

    input.value = before + newLine + markdown + after;
    input.focus();
    input.setSelectionRange(start + newLine.length + markdown.length, start + newLine.length + markdown.length);
    input.dispatchEvent(new Event('input'));
}
