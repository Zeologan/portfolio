function scrollToTop(val) {
    targetClass = val.dataset.scroll;
    const elements = document.getElementsByClassName(targetClass);

    if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
}

