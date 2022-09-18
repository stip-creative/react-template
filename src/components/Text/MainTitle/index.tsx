import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ITextProps } from "..";
import TextType from "../../../models/TextType";
import { mainTitle } from "../../../animationConstants/Text";

import { StyledH1, StyledH2, StyledH3 } from "./style";

interface IWordsWithPositionIndices {
    start: number;
    end: number;
    value: string;
}

const getWordsWithPositionIndices = (str: string): IWordsWithPositionIndices[] => {
    const searchStr = " ";
    const searchStrLen = searchStr.length;

    if (searchStrLen === 0) {
        return [];
    }
    let startIndex = 0;
    let index;
    const result = [];

    while (str.indexOf(searchStr, startIndex) > -1) {
        index = str.indexOf(searchStr, startIndex);
        result.push({
            start: startIndex,
            end: index,
            value: str.slice(startIndex, index),
        });
        startIndex = index + searchStrLen;
    }

    result.push({
        start: startIndex,
        end: str.length,
        value: str.slice(startIndex, str.length),
    });

    return result;
};

const MainTitle: FunctionComponent<ITextProps> = ({ type, text, spans = [], withoutAnimation, withoutLineBreak }) => {
    const textRef = useRef();
    const wordsWithPositionIndices = getWordsWithPositionIndices(text);

    const wordsWithTags = wordsWithPositionIndices.map(word => {
        const isBlue = !!spans.find(span => {
            return word.start >= span.start && word.end <= span.end;
        });
        const wordAndIndent = word.value.split("\n");
        let wordWithSpans = "";

        if (isBlue) {
            wordWithSpans = `<span class="parent"><b>${wordAndIndent.join(`</b></span><span class="parent"><b>`)}</b></span>`;
        } else {
            wordWithSpans = `<span class="parent"><span>${wordAndIndent.join(`</span></span> <span class="parent"><span>`)}</span></span>`;
        }

        return wordWithSpans;
    });

    let arrayWithTagsAndBreaks = [];

    if (withoutLineBreak) {
        arrayWithTagsAndBreaks = wordsWithTags.map(word =>
            word
                .replaceAll('<span class="parent"><span></span></span>', '<span class="parent"><span> </span></span>')
                .replaceAll('<span class="parent"><b>\n</b></span>', '<span class="parent"><span> </span></span>')
        );
    } else {
        arrayWithTagsAndBreaks = wordsWithTags.map(word =>
            word.replaceAll('<span class="parent"><span></span></span>', "</br>").replaceAll('<span class="parent"><b>\n</b></span>', "</br>")
        );
    }

    const textWithWrappedWords: string[] = [];
    const br = "</br>";

    arrayWithTagsAndBreaks.forEach(item => {
        if (item.includes(br)) {
            const startIndex = item.indexOf(br);
            const endIndex = startIndex + br.length;

            textWithWrappedWords.push(item.substring(startIndex, endIndex));
            textWithWrappedWords.push(`<span>${item.substring(endIndex)}</span>`);

            return;
        }

        textWithWrappedWords.push(`<span>${item}</span>`);
    });
    const textWithTagsAndBreaks = textWithWrappedWords.join(" ");

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (textRef.current && !withoutAnimation) {
            gsap.from(textRef.current.querySelectorAll(".parent"), {
                ...mainTitle.parent.vars,
                scrollTrigger: mainTitle.children.scrollTrigger(textRef.current),
            });
            gsap.from(textRef.current.querySelectorAll(".parent > span, .parent > b"), {
                ...mainTitle.children.vars,
                scrollTrigger: mainTitle.children.scrollTrigger(textRef.current),
            });
        }
    }, [withoutAnimation]);

    if (type === TextType.h2) {
        return <StyledH2 className="main-title" ref={textRef} dangerouslySetInnerHTML={{ __html: textWithTagsAndBreaks }} />;
    }
    if (type === TextType.h3) {
        return <StyledH3 className="main-title" ref={textRef} dangerouslySetInnerHTML={{ __html: textWithTagsAndBreaks }} />;
    }

    return <StyledH1 className="main-title notranslate" ref={textRef} dangerouslySetInnerHTML={{ __html: textWithTagsAndBreaks }} />;
};

export default MainTitle;
