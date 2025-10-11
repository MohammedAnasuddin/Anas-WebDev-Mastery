# TanStack Query

## The Problem

Sever Stata is the state that is **stored remotely on a server**. Your application just gets a "snapshot" of it. This is where most of your application's data comes from:

- A user's profile information.
- A list of products in an e-commerce store.
- Blog posts fetched from a CMS.
- The results of a search query.

Server state is fundamentally different and much more complex because:

1. **It's Remote:** You don't own it. It lives somewhere else, and you need asynchronous APIs (like `fetch` or `axios`) to get it.
2. **It Can Become Stale:** The data on the server can be changed by someone else (or even by you in another browser tab) at any time. Your local copy can quickly become out-of-date without you knowing.
3. **It Involves Caching:** You don't want to re-fetch the same data every single time a component mounts. *Caching is essential for performance, but managing it manually is very difficult*.
4. **It Requires Handling Loading/Error States:** Every network request might be loading, might succeed, or might fail. You have to manage these states for every single piece of data you fetch.

> **TanStack Query is a dedicated server state management library.**
> 
> It specializes in handling all the complexities of server state for you. It gives you simple hooks that automatically manage:
> 
> - Fetching and re-fetching data.
> - Caching.
> - Detecting stale data and updating it in the background.
> - Loading and error states.
> - Retrying failed requests.

## Setup TanStack

1. Run 

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

#### 1. Create the `QueryClient`

It's a best practice to create only **one** instance of the `QueryClient` for your entire application and *keep it in a separate file*. This makes it easy to import and use anywhere, especially for invalidating queries outside of components.

Inside this file, we will instantiate `QueryClient`. We'll also configure `defaultOptions`.

A vital default to set is `staleTime`. **By default, data is considered "stale" immediately**. By setting a `staleTime` of 5 minutes, we're telling TanStack Query to *treat fetched data as fresh for 5 minutes, which prevents unnecessary re-fetching* and makes your app feel much faster.

> **Stale Data**
> 
> Stale data refers to  information that is no longer current or accurate because the underlying source of that data has changed, but the representation in your code or UI has not yet been updated.
> 
> > **Why to  store for 5mins ?**
> > 
> > 1. The user navigates back to the  page **within 5 minutes**.
> > 2. **Result:** TanStack Query sees the data is still `fresh`. It **instantly** serves the data from the cache and **does not make a network request**. Your UI renders immediately with the data it already has.
> > 
> > **This is a massive performance win**. For data that doesn't change every second, you've just saved a completely unnecessary API call and your user gets an instant experience. 

```js
//query.js
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions:{
    queries :{
        staleTime:5*60*1000
    }
}
})
```

#### 2. Provide the Client and Add Devtools

Now, we need to make this client available to all the components in your app. We do this in your *application's entry point* ( `src/main.jsx`), using the `QueryClientProvider`.

In React, a Provider is a component that *makes data or state available to all its descendant(Children) components* in the component tree, **without the need to explicitly pass props down through every level**.

> we'll add the `ReactQueryDevtools`. This is a must-have for development. It floats in the corner of your screen and lets you see every query, its data, its status, and when it's fetching. **It won't be included in your production bundle, so it's completely safe to add.** 

```js
//main.jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {queryClient} from './config/query.js'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}> 
    <App />
    <ReactQueryDevtools intialIsOpen={true} />
  </QueryClientProvider>
)
```

#### 3. Define the Data Fetching Function

- This is an `async` function responsible for one thing: getting the data.

- We use `axios.method()` to make the network request.
  
  > move this function outside the component. *It's a good practice for pure functions that don't depend on component state.*

#### 4. Use the `useQuery` Hook

- We call the `useQuery` hook with a configuration object.

- **`queryKey: ['key_name']`**: This is a *unique identifier for this specific query*. TanStack Query *uses this key to cache the data*. If another component anywhere in your app asks for data with the `['key_name']` key, **it will get the cached data instantly without re-fetching**.

- **`queryFn: functionName`**: This tells `useQuery` which *function to call to get the data.*

- **Return Values**: The **hook gives us back an object with the current status of the query**. We are destructuring the most important properties:
  - `data`: Will contain our quotes once the fetch is successful.
  - `isLoading`: A boolean that is `true` only during the very first fetch.
    - **`isPending` (and `isLoading`)**: This is for the **initial data load**. It is only `true` when the query is fetching for the very first time and has no data in its cache yet.
    - **`isFetching`**: This is for **any data fetch**. It is `true` whenever the query function is running, which includes both the initial load *and* any subsequent background refetches (like when you re-focus the window or a query is refetched automatically).
  - `isError`: A boolean that becomes `true` if our `fetchQuotes` function throws an error.
  - `error`: The error object itself, if one occurred.

> TanStack Query allows you to **override** any global default on a per-query basis.

```js
 const {data, isLoading} = useQuery({
        queryKey: ['key'],
        queryFn: functionName
    })
```

#### 4. Handle Loading and Error States

```js
if (isLoading) {
    return <div className="...">Loading quotes...</div>;
}

if (isError) {
    return <div className="...">Error: {error.message}</div>;
}
```

#### 5. Use the data to render the Component

## Refetching

**Refetching** is the process of automatically requesting fresh data from your server to ensure the user's screen is up-to-date.

The data in your application's frontend is just a temporary copy of the "source of truth" on your server. This data can become outdated or **"stale"** at any moment.

- Another user could have updated the data.
- A background process on the server could have changed it.
- The current user might have made a change in another browser tab.

Without automatic re-fetching, *your user would be looking at stale data until they manually refreshed the entire page*. **TanStack Query solves this by intelligently re-fetching data in the background to keep the UI in sync with the server**, creating a much more modern and "live" experience.

A **refetch only happens when a trigger occurs *and* the data is stale.** By default, these triggers are:

- The window is refocused.
- The component remounts.
- The network reconnects.

### Refetch via User activity

```jsx
const {data, isLoading, isError, error, isFetching, refetch} = useQuery({
        queryKey: ['quotes'],
        queryFn: getQuotes,
        staleTime: 3000
        // By removing the staleTime option here, this query will now use the
        // default staleTime configured in your QueryClient (5 minutes).
    })
```

Setting `staleTime:3000` : If you leave tab for mentioned milliseconds and visit back the network call is made again.

**`refetchOnWindowFocus: true`** is a **default option** that you get for free. This is the *trigger*. When you leave the tab and come back, this trigger fires. It then asks, "Is the data for this query stale?"

Because you waited more than 3 seconds, the answer is "yes," and `refetchOnWindowFocus` starts a background refetch. This is why you see the `isFetching` state become true when `staleTime:3000`.

`staleTime` is the **permission**, and `refetchOnWindowFocus` is the **action**. The action only runs if it has permission.

> If you want to see a spinner on every fetch use `isFetching` rather than `isLoading`

### Refetch Manually

use `refetch()` function to perform a refetch

```jsx
 <button
    onClick={() => refetch()}
    disabled={isFetching}
    {isFetching ? 'Refreshing...' : 'Get New Quotes'}
 </button>
```

### Automatic Refetch

This process is often called **"polling"**.

use `refetchInterval:1000` in `useQuery()` Hook to refetch after every mentioned seconds.

## **Persisting the Query Cache**

This means saving the state of your queries (the fetched data, when it became stale, etc.) to a persistent storage like `localStorage`.

1. **Instantaneous Initial Loads**: When a user re-opens your app, the data can be loaded instantly from `localStorage` while TanStack Query refetches the fresh data in the background. The user sees content immediately instead of a loading spinner.
2. **Offline Support**: If the user opens the app while offline, they can still see the data from the last time they were online.

### Step 1: Install the Persistence Adapter

```bash
npm install @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

### Step 2: Create the Query Configuration File

```js
import { QueryClient } from "@tanstack/react-query";
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
export const queryClient = new QueryClient({
    defaultOptions:{
    queries :{
        staleTime:5*60*1000,
        gcTime: 1000 * 60 * 60 * 24,
    }
}
})

export const persister = createAsyncStoragePersister({
    storage: window.localStorage
})
```

- **`gcTime`**: This stands for **Garbage Collection Time**. **It's the duration until *inactive* query data is removed from the cache.** We set it to 24 hours. *By default, `gcTime` is 5 minutes*. If a user closes the tab and comes back 10 minutes later, the data would be gone. *By setting a long `gcTime`, we ensure the data stays in the cache long enough to be useful when the user returns, even the next day.*

- **`createSyncStoragePersister(...)`**: This function from the new package *creates the "persister" object. It's the bridge between the query cache and the storage*.

- **`storage: window.localStorage`**: This tells the persister exactly where to save the data. We're using the browser's standard `localStorage`.

### Step 3: Update the Main Application File

1.  import `PersistQueryClientProvider` instead of the regular `QueryClientProvider`.

2.  Wrap  `<App />` with `<PersistQueryClientProvider>`. This special provider does all the magic:
   
   - On initial load, it checks `localStorage` for any saved query data.
   - If it finds data, it restores it into the `queryClient`'s cache.
   - It automatically saves any new data fetched by `useQuery` into `localStorage`.

```jsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {queryClient, persister} from './config/query.js'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

 <PersistQueryClientProvider 
        client={queryClient}
        persistOptions={{ persister }}>
    <App />
    <ReactQueryDevtools intialIsOpen={true} />
    </PersistQueryClientProvider>
```

> `NOTE`
> 
> The `PersistQueryClientProvider` component expects its `persistOptions` prop to be an object. Hence use `{{ }}`


