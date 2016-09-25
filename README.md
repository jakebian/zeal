# Zeal

Pomodoro-centric, heirarchical project management.

## How it works

Write your todo list with ES6 modules

![screenshot from 2016-09-25 15-45-41](https://cloud.githubusercontent.com/assets/5866348/18818779/e16d38e4-8337-11e6-8e2d-fb9673b58639.png)

Get your task tree visualization (with live module reload!)

![screenshot from 2016-09-25 15-37-06](https://cloud.githubusercontent.com/assets/5866348/18818777/e16983c0-8337-11e6-802b-6e1e6ec6ef84.png)

Check out `src/tasks` for the format.

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

### subtree@[taskId]
Show only the subtree starting at a certain node
![screenshot from 2016-09-25 15-38-03](https://cloud.githubusercontent.com/assets/5866348/18818776/e167f064-8337-11e6-9392-8d43828322aa.png)


![Uploading Screenshot from 2016-09-25 15-37-26.png…]()
### leaves
Show leaves of the tree
![screenshot from 2016-09-25 15-37-26](https://cloud.githubusercontent.com/assets/5866348/18818778/e16aaca0-8337-11e6-8141-5c735d8226b5.png)

### done
Shows completed leaves

### todo
Shows marked not done

### unestimated
Shows leaves missing a pomodoro estimate.