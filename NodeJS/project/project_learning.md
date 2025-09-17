## Staring the frontend app

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

` npm create vite@latest my-vue-app -- --template vue`

See create-vite for more details on each supported template: vanilla, vanilla-ts, vue, vue-ts, react, react-ts, react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts, solid, solid-ts, qwik, qwik-ts.

> You can use . for the project name to scaffold in the current directory.



## Using Component Classes

in `index.css`

```css

@import "tailwindcss";

@import "tailwindcss-radix-colors/dist/red.css";
@import "tailwindcss-radix-colors/dist/slate.css";
@import "tailwindcss-radix-colors/dist/blue.css";

```

Usage

```jsx
function App() {
  // A small helper component to avoid repetition and keep the code clean.
  const Showcase = ({ title, className, children, element: Element = 'div' }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-slate-dim mb-2">{title}</h3>
      <Element className={`rounded-lg p-6 border border-slate-dim transition-colors duration-200 flex items-center justify-center text-center min-h-[100px] ${className}`}>
        {children}
      </Element>
      <p className="text-sm text-slate-dim mt-2 font-mono">
        {className}
      </p>
    </div>
  );

  return (
    <div className="bg-slate-app text-slate-normal p-4 sm:p-8 md:p-12 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-normal mb-2">TailwindCSS Radix Colors Showcase</h1>
        <p className="text-lg text-slate-dim">Demonstrating Radix Component Classes</p>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* --- Red --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-normal border-b border-slate-dim pb-2 mb-6">'Red' Component Classes</h2>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Backgrounds</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Showcase title="App Background" className="bg-red-app text-red-normal" children="bg-red-app" />
            <Showcase title="Subtle Background" className="bg-red-subtle text-red-normal" children="bg-red-subtle" />
            <Showcase title="UI Element" className="bg-red-ui text-red-normal" element="button" children="bg-red-ui (hover/active)" />
            <Showcase title="Ghost Element" className="bg-red-ghost text-red-normal" element="button" children="bg-red-ghost (hover/active)" />
            <Showcase title="Action Element" className="bg-red-action text-red-normal" element="button" children="bg-red-action (hover/active)" />
            <Showcase title="Solid Background" className="bg-red-solid text-red-1" element="button" children="bg-red-solid (hover)" />
          </div>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Borders</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Showcase title="Dim Border" className="border-2 border-red-dim bg-slate-ui text-slate-normal" children="border-red-dim" />
            <Showcase title="Normal Border" className="border-2 border-red-normal bg-slate-ui text-slate-normal" element="button" children="border-red-normal (hover)" />
          </div>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Dividers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Showcase title="Dim Divider" className="divide-y-2 divide-red-dim bg-slate-ui text-slate-normal flex-col !items-stretch">
              <div className="w-full text-center py-4">Item 1</div>
              <div className="w-full text-center py-4">Item 2</div>
            </Showcase>
            <Showcase title="Normal Divider" className="divide-y-2 divide-red-normal bg-slate-ui text-slate-normal flex-col !items-stretch">
              <div className="w-full text-center py-4">Item 1</div>
              <div className="w-full text-center py-4">Item 2</div>
            </Showcase>
          </div>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Text Colors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Showcase title="Dim Text" className="text-red-dim bg-slate-ui" children="This text uses text-red-dim" />
            <Showcase title="Normal Text" className="text-red-normal bg-slate-ui" children="This text uses text-red-normal" />
          </div>
        </section>

        {/* --- Blue --- */}
        <section>
          <h2 className="text-3xl font-bold text-blue-normal border-b border-slate-dim pb-2 mb-6">'Blue' Component Classes</h2>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Backgrounds</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Showcase title="App Background" className="bg-blue-app text-blue-normal" children="bg-blue-app" />
            <Showcase title="Subtle Background" className="bg-blue-subtle text-blue-normal" children="bg-blue-subtle" />
            <Showcase title="UI Element" className="bg-blue-ui text-blue-normal" element="button" children="bg-blue-ui (hover/active)" />
            <Showcase title="Ghost Element" className="bg-blue-ghost text-blue-normal" element="button" children="bg-blue-ghost (hover/active)" />
            <Showcase title="Action Element" className="bg-blue-action text-blue-normal" element="button" children="bg-blue-action (hover/active)" />
            <Showcase title="Solid Background" className="bg-blue-solid text-blue-1" element="button" children="bg-blue-solid (hover)" />
          </div>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Borders</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Showcase title="Dim Border" className="border-2 border-blue-dim bg-slate-ui text-slate-normal" children="border-blue-dim" />
            <Showcase title="Normal Border" className="border-2 border-blue-normal bg-slate-ui text-slate-normal" element="button" children="border-blue-normal (hover)" />
          </div>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Dividers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Showcase title="Dim Divider" className="divide-y-2 divide-blue-dim bg-slate-ui text-slate-normal flex-col !items-stretch">
              <div className="w-full text-center py-4">Item 1</div>
              <div className="w-full text-center py-4">Item 2</div>
            </Showcase>
            <Showcase title="Normal Divider" className="divide-y-2 divide-blue-normal bg-slate-ui text-slate-normal flex-col !items-stretch">
              <div className="w-full text-center py-4">Item 1</div>
              <div className="w-full text-center py-4">Item 2</div>
            </Showcase>
          </div>

          <h3 className="text-2xl font-bold text-slate-normal mt-8 mb-4">Text Colors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Showcase title="Dim Text" className="text-blue-dim bg-slate-ui" children="This text uses text-blue-dim" />
            <Showcase title="Normal Text" className="text-blue-normal bg-slate-ui" children="This text uses text-blue-normal" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

```
