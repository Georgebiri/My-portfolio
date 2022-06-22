// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ["What matters in life is not the mere fact that we have lived, but it is the change we make in the lives of others that determines the significance of the life we lead  ~ Nelson Mandela", 
      "Live, Love, laugh - Myself", "The most effective way to do is to do it - Amelia Earhart", "The best and most beautiful things in the world cannot be seen or even touched- they must be felt with the heart - Helen keller",
      "You just cannot beat the person who never gives up - Babe Ruth", "Try not to become a man of success, but rather try to become a man of value - Albert Einstein"];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/* Fetches info from the servlet and adds it to the page. 
async function showServlet() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();

    const servletContainer = document.getElementById('servlet-container');
    servletContainer.innerText = textFromResponse;
}
*/
async function showServlet() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();

    console.log(textFromResponse.x);
    console.log(textFromResponse.y);
    console.log(textFromResponse.z);

    const servletContainer = document.getElementById('servlet-container');
    servletContainer.innerText = textFromResponse;
}
/** Fetches tasks from the server and adds them to the DOM. */
function loadTasks() {
    fetch('/list-tasks').then(response => response.json()).then((tasks) => {
      const taskListElement = document.getElementById('task-list');
      tasks.forEach((task) => {
        taskListElement.appendChild(createTaskElement(task));
      })
    });
  }
  
  /** Creates an element that represents a task, including its delete button. */
  function createTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
  
    const titleElement = document.createElement('span');
    titleElement.innerText = task.title;
  
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.innerText = 'Delete';
    deleteButtonElement.addEventListener('click', () => {
      deleteTask(task);
  
      // Remove the task from the DOM.
      taskElement.remove();
    });
  
    taskElement.appendChild(titleElement);
    taskElement.appendChild(deleteButtonElement);
    return taskElement;
  }
  
  /** Tells the server to delete the task. */
  function deleteTask(task) {
    const params = new URLSearchParams();
    params.append('id', task.id);
    fetch('/delete-task', {method: 'POST', body: params});
  }
  