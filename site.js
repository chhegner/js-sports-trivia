
// import the utility functions "decodeHtml" and "shuffle"
import { decodeHtml, shuffle } from './utils.js' 

// get the elements from the DOM
const questionElement = document.querySelector('#question')
const answersElement = document.querySelector('#answers')
const nextQuestionElement = document.querySelector('#nextQuestion')

// IIFE (so we can use async/await)
;(async () => {

	// todo: create your "getNextQuestion" function
	const https = require('https')
	const url = `https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple`
	
	https.get(url, response => {
		let body = ''
		response.on('data', data => body += data.toString())
		response.on('end', () => console.log(JSON.parse(body)))
	})

	const getNextQuestion = async json => {
		const response = await fetch(url)
		json = await response.json
		const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
		console.log(json)
		const answers = shuffle([ ...incorrect, correct ])
		return { question, answers, correct }
	}
	
	const question = await getNextQuestion()
	console.log(question)

	// todo: create your "renderQuestion" function

	const renderQuestion = ({ question, answers, correct }) => { 


	}

	// todo: add the event listener to the "nextQuestion" button
	nextQuestionElement.addEventListener(`click`, event => {
		setTimeout((getNextQuestion) => {}, 10000)
	})
})()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
