import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    selected = {} // for storing answers
    correctAnswers = 0 // to show the number of correct answers
    isSubmitted = false // to show the result

    //Questions
    myQuestions = [
        //Question 1
        {
            id : "Question1",
            questionNumber : 1,
            question : "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
            answers : {
                    a : "Developer Orgs",
                    b : "Developer Sandboxes",
                    c : "Full Copy Sandboxes",
                    d : "Scratch Orgs"
                },
            correctAnswer : "d"
        },

        //Question 2
        {
            id : "Question2",
            questionNumber : 2,
            question : "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use Data Loader instead of Data Import Wizard?",
            answers : {
                a : "Data Import Wizard does not support Opportunities",
                b : "Data Import Wizard can not import all 500 records",
                c : "Data Loader runs from the developer's browser",
                d : "Data Loader automatically relates Opportunities to Accounts"
            },
            correctAnswer : "a"
        },

        //Question 3
        {
            id : "Question3",
            questionNumber : 3,
            question : "What can be used to override the Account's standard Edit button for Lightning Experience?",
            answers : {
                a : "Lightning Action",
                b : "Lightning Flow",
                c : "Lightning component",
                d : "Lightning Page"
            },
            correctAnswer : "c" 
        }
    ]

    //for disabling submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    //for applying dynamic styling to result
    get isScoredFull(){
        return `slds-text-heading_medium ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    } 

    //change handler get's called on every click on the options
    changeHandler(event){
        console.log("name ",event.target.name)
        console.log("value ",event.target.value)
        //const name = event.target.name
        //const value = event.target.value
        const {name,value} = event.target // Destructuring
        this.selected = {...this.selected, [name]:value} // Spread Operator
        //console.log(this.selected)
    }

    //form submit handler
    submitHandler(event){
        event.preventDefault()
        //this.selected = {"Question1":"a","Question2":"b","Question3":"c"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        console.log(correct)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("Correct Answer ==> ",this.correctAnswers)
    }

    //form reset handler
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }

}