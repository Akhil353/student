---
toc: True
comments: False
layout: default
title: To-Do List
description: Manage all of your daily tasks!
permalink: /to-do-list
tags: [bash]
type: hacks
courses: {'timebox': {'week': 3}}
---

```bash
%%script bash

#Create the to do list
declare -A to_do_list

# Make tasks
to_do_list["09_08_2023"]="Task 1 Task 2 Task 3"
to_do_list["09_09_2023"]="Task 1 Task 2 Task 3"
to_do_list["09_10_2023"]="Task 1 Task 2 Task 3"

# Add a new task
add_task() {
    date="$1"
    read -p "Enter the task for $date: " task
    to_do_list["$date"]+=" $task"
    echo "Task added for $date: $task"
}

# Remove a task
mark_task_completed() {
    date="$1"
    echo "Tasks for $date:"
    tasks=(${to_do_list["$date"]})
    for i in "${!tasks[@]}"; do
        echo "$((i+1)). ${tasks[$i]}"
    done
    read -p "Enter the number of the task to mark as completed: " task_number
    if [ "$task_number" -ge 1 ] && [ "$task_number" -le "${#tasks[@]}" ]; then
        index=$((task_number - 1))
        completed_task="${tasks[$index]}"
        tasks=("${tasks[@]:0:index}" "${tasks[@]:index+1}")
        to_do_list["$date"]="${tasks[*]}"
        echo "Task marked as completed for $date: $completed_task"
    else
        echo "Invalid task number."
    fi
}

# List all tasks in a certain day
list_tasks() {
    date="$1"
    echo "Tasks for $date:"
    tasks=(${to_do_list["$date"]})
    for i in "${!tasks[@]}"; do
        echo "$((i+1)). ${tasks[$i]}"
    done
}

# Option menu, very cool
while true; do
    echo "Menu:"
    echo "1. Add a task"
    echo "2. Mark a task as completed"
    echo "3. List tasks for a date"
    echo "4. Quit"
    read -p "Enter your choice (1/2/3/4): " choice

    case "$choice" in
        1)
            read -p "Enter the date (e.g., 09_08_2023): " date
            if [ -n "${to_do_list["$date"]}" ]; then
                add_task "$date"
            else
                echo "Date not found."
            fi
            ;;
        2)
            read -p "Enter the date (e.g., 09_08_2023): " date
            if [ -n "${to_do_list["$date"]}" ]; then
                mark_task_completed "$date"
            else
                echo "Date not found."
            fi
            ;;
        3)
            read -p "Enter the date (e.g., 09_08_2023): " date
            if [ -n "${to_do_list["$date"]}" ]; then
                list_tasks "$date"
            else
                echo "Date not found."
            fi
            ;;
        4)
            echo "Goodbye!"
            exit 0
            ;;
    esac
done
```
