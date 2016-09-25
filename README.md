# Zeal

Pomodoro-centric, hierarchical task list.

![screenshot from 2016-09-25 16-39-28](https://cloud.githubusercontent.com/assets/5866348/18819115/c3c587cc-833e-11e6-810c-f27c198b916c.png)



## Why?

Zeal is a project management tool I built for myself.

- As someone who writes code, I'm far more efficient and manipulating code blocks than at entering text and pressing buttons in pop up modals.

- I measure my progress in pomodoros.

- I want to see my project structure

   - When starting a project, I want to start with big ideas, then break them down into smaller ideas, then break those down further, until my project becomes a list of tasks. I like to keep track of this hierarchical structure of my projects.

- I want to see my progress

  - I want to know how many pomodoros I'm away from a milstone.
  
If you resonate with any of these points, give zeal a shot.


## How it works

Write your todo list with ES6 modules

![screenshot from 2016-09-25 15-45-41](https://cloud.githubusercontent.com/assets/5866348/18818779/e16d38e4-8337-11e6-8e2d-fb9673b58639.png)

Get your task tree visualization (with live module reload!)

![screenshot from 2016-09-25 15-37-06](https://cloud.githubusercontent.com/assets/5866348/18818777/e16983c0-8337-11e6-802b-6e1e6ec6ef84.png)

Check out `src/tasks` for the format.

## Usage

1. Clone the repository
2. `npm install`
3. `npm start` to run the application
4. Replace src/tasks with your own tasks!



## Filters

Dig into your task tree with filters

### Syntax

Filter nodes in your graph by specifying a list of filters in the url hash. The syntax is:

```
#filterName1@filterValue1#filterName2@filterValue2...

```

Drill into your graph by chaining more filters. For example
```
#subtree@familyLifeTasks#leaves
```

shows leaves of the subtree `familyLifeTasks`.


### Available filters

### \#subtree@[taskId]
Show only the subtree starting at a certain node
![screenshot from 2016-09-25 15-38-03](https://cloud.githubusercontent.com/assets/5866348/18818776/e167f064-8337-11e6-9392-8d43828322aa.png)


![Uploading Screenshot from 2016-09-25 15-37-26.png…]()
### \#leaves
Show leaves of the tree
![screenshot from 2016-09-25 15-37-26](https://cloud.githubusercontent.com/assets/5866348/18818778/e16aaca0-8337-11e6-8141-5c735d8226b5.png)

### \#done
Shows completed leaves

### \#todo
Shows marked not done

### \#unestimated
Shows leaves missing a pomodoro estimate.

