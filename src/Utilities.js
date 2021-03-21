const truncateText = (text, limit) => {
    text = text.trim();

    if(text.length > limit){
        return text.substring(0, limit - 3) + "..."
    }
    return text;
}

export {
    truncateText,
}