#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.blue("\n \t Todo-List\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task:"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task add in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more Task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("your updated todo-list:\n", todoList);
