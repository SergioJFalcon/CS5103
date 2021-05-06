import React from 'react'
import { render, screen } from '@testing-library/react'

import {printCleanList, printMap, cleanList, wordCount, wordFrequency, lineCount, charCount, uniqueCharFrequency, replaceWord} from './manipulation';


test('has correct welcome text', () => {
    render(<h4>Created By: Sergio J Falcon</h4>)
    expect(screen.getByRole('heading')).toHaveTextContent('Created By: Sergio J Falcon')
})
describe('String Manipulation', ()=> {
    test('empty data file', () => {

    });
    test('printing a clean list', ()=> {
        let dirty = 'let,this   be|dirty';
        let clean = 'let this be dirty';
        expect(printCleanList(cleanList(dirty))).toEqual(clean);
    });
    test('clean list', () => {
        let dirty = 'this,is a|dirty,sentence';
        let clean = ['this', 'is', 'a', 'dirty', 'sentence'];
        expect(cleanList(dirty)).toEqual(clean);
    });
    test('word count', () => {
        let dirty = 'this,is a|dirty,sentence';
        let count = 5;
        expect(wordCount(dirty)).toEqual(count);
    });
    test('null word count', () => {
        let text = '';
        expect(wordCount(text)).toEqual(null);
    })
    test('word frequency', () => {
        let dirty = 'this,this is a a a|dirty dirty,sentence';
        let frequency = [{word: 'this', counter: 2}, {word: 'is', counter: 1}, {word: 'a', counter: 3}, {word: 'dirty', counter: 2}, {word: 'sentence', counter: 1}];
        expect(wordFrequency(dirty)).toEqual(frequency);
    });
    test('empty text for wordFrequency', () => {
        let dirty = '';
        expect(wordFrequency(dirty)).toEqual([0]);
    });
    test('line count', () => {
        let text = "this is the first line\n this is the second line\n third line is here too";
        let count = 3;
        expect(lineCount(text)).toEqual(count);
    });
    test('line count for an empty textfile', () => {
        let text = "";
        let count = null;
        expect(lineCount(text)).toEqual(count);
    });
    test('character Count', ()=> {
        let text = 'a bb ccc dddd';
        let result = 10;
        expect(charCount(text)).toEqual(result);
    });
    test('frequency of characters', () => {
        let text = 'a bb ccc dddd';
        let result = [{character: 'a', counter: 1}, {character: 'b', counter: 2}, {character: 'c', counter: 3}, {character: 'd', counter: 4}];
        expect(uniqueCharFrequency(text)).toEqual(result);
    });
    test('empty text file for uniqueCharFrequency', () => {
        let text = '';
        expect(uniqueCharFrequency(text)).toEqual([0]);
    })
    test('escapeRegExp', () => {
        
    });
    test('replacing an indicated word', () => {
        let oldText = 'first second third';
        let oldWordToBeReplaced = 'first';
        let newWord = 'one';
        let newText = 'one second third';
        expect(replaceWord(oldText, oldWordToBeReplaced, newWord)).toEqual(newText);
    });
    test('replacing every indicated word in the string', () => {
        let oldText = 'first first second third';
        let oldWordToBeReplaced = 'first';
        let newWord = 'one';
        let newText = 'one one second third';
        expect(replaceWord(oldText, oldWordToBeReplaced, newWord)).toEqual(newText);

    });
})