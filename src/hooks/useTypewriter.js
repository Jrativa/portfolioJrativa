import { useEffect, useState } from "react";

// Types each word letter by letter, pauses, deletes it and moves on to the next one
export const useTypewriter = (words, { typeSpeed = 120, deleteSpeed = 50, pause = 2000 } = {}) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Start over when the word list changes (e.g. on language switch)
    useEffect(() => {
        setIndex(0);
        setText("");
        setIsDeleting(false);
    }, [words]);

    useEffect(() => {
        const fullText = words[index % words.length];
        const finishedTyping = !isDeleting && text === fullText;
        const delay = finishedTyping ? pause : isDeleting ? deleteSpeed : typeSpeed;

        const timer = setTimeout(() => {
            if (finishedTyping) {
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
            }
        }, delay);
        return () => clearTimeout(timer);
    }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, pause]);

    return text;
};
