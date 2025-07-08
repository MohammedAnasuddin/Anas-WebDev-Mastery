# Handling Dynamic API

Your code should not break due to change in response format of the `API`

## Getting the API URL:

1. Go to a site

2. Open DevTools and Network Tab

3. and select `Fetch/XHR` this will filter out all the `fetch calls`

4. click on the item (Left Click -> copy the link address ->  paste it in the URL -> Search -> Can view the whole response)

5. In Headers you would have `request_URL` 

6. use the `preview` tab to visualize the response and study it.

7. > Make sure of the Responsive Icon if enabled the result might vary according to the device

## Fetching Data using `fetch()`

Here is the boiler plate:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // Use .json() convertingrespose is an asynchronous.
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
```

## Bypassing CORS:

Append `https://corsproxy.io/?url=https://example.com`  during the call.
