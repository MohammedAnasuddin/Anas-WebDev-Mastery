### Microtask Queue
- Microtask Queue, also known as the Job Queue, is a type of task queue that holds a list of microtasks. 
- Microtasks are small, short-duration tasks which are scheduled to run after the currently executing script has run to completion and before control is returned to the event loop to process other tasks in the task queue.

- After each task in the task queue, the event loop will process all the microtasks in the Microtask Queue before moving on to the next task. If a microtask adds more microtasks to the queue, those will also be processed before the next task starts.

- Microtasks include promise callbacks. When a promise is resolved or rejected, the callback function tied to it is not immediately executed; instead, it is added to the Microtask Queue to be processed as a microtask.

- In JavaScript's event loop, microtasks have a higher priority than other tasks. After each task, before the next task starts, all microtasks in the Microtask Queue are processed