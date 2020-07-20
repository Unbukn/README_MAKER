# README_MAKER

## Description
README_Maker is a command-line application that allows for quick and easy generation of a README file to get save time and energy. This will allow developers to spend more time working on finishing their project's and less time creating READMEs.

### Table of contents
1. [Description](#Description)
2. [Table of Contents](#Table-of-Contents)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Tests](#Tests)
8. [Questions](#Questions)

## Installation
1. First fork the github https://github.com/Unbukn/README_MAKER repo on https://github.com/.
2. Clone your newly forked repo to a directory on your computer.
3. Open the [index.js](./index.js) file in your terminal.
4. Install the node dependencies to the application by entering:
```
npm i
``` 

## Usage
To create a readme for your project enter and complete all the prompts:
```
node index.js
```
A [demo video](https://youtu.be/uRBiRK0loAc) demonstrates the application being run and the markdown file that is created.

### The prompts explained
```console
? What is the title of the project 
```
Information entered is displayed as the title of the README file and, the first heading inside of the markdown. Note: if no entry is made the file will be saved as ```YourProjectName.md```

```console
? Describe your project. 
```
Information entered is displayed under the ```Description``` heading of the markdown. Note: if no entry is made ```A description of the project goes here.``` will be saved as a placeholder.

```console
? How do you install your application? Are there dependencies? 
```
Information entered is displayed under the ```Installation``` heading of the markdown. Note: if no entry is made ```TBD``` will be saved as a placeholder.

```console
? How do you use your application? 
```
Information entered is displayed under the ```Usage``` heading of the markdown. Note: if no entry is made ```To use, (the project title here) you need to do . . . ``` will be saved as a placeholder.

```console
? Select a license type. 
```
Information entered is displayed under the ```License``` heading of the markdown. Note: if no entry is made ```MIT``` will be saved as a placeholder.

```console
? Who contributed to the project?
```
Information entered is displayed under the ```Contributing``` heading of the markdown. There is no default for this prompt.

```console
? Select a license type. 
```
Information entered is displayed under the ```Tests``` heading of the markdown. Note: if no entry is made ```npm run tests``` will be saved as a placeholder.

```console
? Select a license type. 
```
Information entered is displayed under the ```Questions``` heading of the markdown. There is no default for this prompt.

```console
? Select a license type. 
```
Information entered is displayed under the ```Questions``` heading of the markdown. Note: if no entry is made ```someone@a-domain.com``` will be saved as a placeholder.


## License
[![License MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://shields.io/)
Copyright (c) 2020 James_Hudgins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Contributing
This application was developed by James Hudgins. README_MAKER was made possible with the following technologies:
[Node.js](https://nodejs.org/api/fs.html)
[Inquirer,js](https://www.npmjs.com/package/inquirer)
[Terminal-link](https://www.npmjs.com/package/terminal-link)
[Shields.io](https://shields.io/)
[youtube](https://youtube.com)

## Tests
There are currently no tests available for this version of README_MAKER.

## Questions
Questions regarding this application should be sent via email to, james.hudgins.work@gmail.com. You can also contact me on github with additional questions -> https://github.com/Unbukn/