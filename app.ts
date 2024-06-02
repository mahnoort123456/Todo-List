import inquirer from "inquirer";
let todos = [];
let condition = true;
while(condition)
{
    let todosQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "what would you like to add in your todos",
            type: "input"
        },
        {
            name: "secondQuestion",
            message: "world you like to add more in your todos",
            type: "confirm",
            default: "true"
        }
    ]
);
todos.push(todosQuestion.firstQuestion);
console.log(todos);
condition = todosQuestion.secondQuestion
}    