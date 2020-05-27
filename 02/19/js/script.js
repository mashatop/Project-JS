"use strict";

function learnJS(lang, a) {
    console.log (`Я учу ${lang}`);
    a();
}

function test() {
    console.log('Test');
}

learnJS('JavaScript', test);