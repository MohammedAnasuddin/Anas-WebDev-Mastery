# NPM Basics

`npm` is an <u>online repository</u> for the publishing of open-source Node.js projects also it is a <u>CLI tool</u> that aids you install those packages and manage their versions and dependencies.

## npm install

```bash
Summary 
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <folder>

aliases: npm i, npm add
common options: 
[-P|--save-prod , -D|--save-dev ,-O|--save-optional] 
[-E|--save-exact] 
[-B|--save-bundle]
[--no-save] 
[--dry-run]



npm will refuse to install any package with an identical 
name to the current package.
```

This command installs a package, and any packages that it depends on.

A `package` is:

- a) a folder containing a program described by a [`package.json`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) file
- b) a gzipped tarball (extension of compressed file ) containing (a)
- > ### Gzipped
  > 
  > Gzipped refers to a file that has been compressed using `gzip` Algorithm developed by GNU.
  > 
  > Gzip is commonly employed to reduce file sizes, especially for web content, leading to faster data transmission and improved website performance.

`npm install`  -> Installs the dependencies in the local node_modules folder.

`npm install -g`  -> installs the  dependency  the current working directory as a global package.  Instead of putting the package inside your project’s `node_modules/`, it installs the package into a **system-wide directory** that npm manages (depends on your OS).

> By default, `npm install` will install all modules listed as dependencies in [`package.json`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

But With the `--production` flag (or when the `NODE_ENV` environment variable is set to `production`), npm will not install modules listed in `devDependencies`

> ### devDependencies
> 
> Dev dependencies are **packages needed only during the development and testing phases of a project, not in the final production build.** They include tools like testing frameworks, linters, and build tools, which are crucial for development but *<u>not necessary for the application to run in production.</u>*
> 
> #### Decision
> 
> *"Is this package required for the application to run successfully in a deployed, production environment?"*
> 
> - If the answer is no, and the package is only used for tasks like development, testing, or building, then it should be a dev dependency.

### Installing Specific version of Package

`npm install [<@scope>/]<name>@<version>`

Install the specified version of the package. This will fail if the version has not been published to the registry.

`npm install [<@scope>/]<name>@"version range"`:  Install a version of the package matching the specified version range. Use `> , < ,>=, <=` to describe the range.

> When multiple versions satisfy the range → **npm always installs the highest (latest) matching version**.

#### Installing with an alias

`npm install <alias>@npm:<name>`:  Install a package under a custom alias. more convenient import names for packages with rather than long ones.

### Controlling the packages category

`npm` can control where and how they get saved with some additional flags:

- `-P, --save-prod`: Package will appear in your `dependencies`. This is the default unless `-D` or `-O` are present.

- `-D, --save-dev`: Package will appear in your `devDependencies`.

- `-O, --save-optional`: Package will appear in your `optionalDependencies`.
  
  - These dependencies are not strictly required for the core functionality of a package, but they offer additional features. If an **optional dependency cannot be installed**,  *npm will proceed with the installation of the main package without reporting an error* for the failed optional dependency.

- `--no-save`: Prevents saving to `dependencies`.
  
  - #### What `--no-save` does
    
    If you run:
    
    `npm install <name> --no-save`
    
    - It **installs `<name>` into `node_modules/`**,
    
    - **But does NOT update** `package.json` or `package-lock.json`.
    
    So after installation:
    
    - `<name/>` is available locally to use in your project.
    
    - But if someone else clones your repo and runs `npm install`, they **won’t get `<name/>`** because it’s not listed in `package.json`.
  
  - useful when :
    
    - **One-off experiments**: Trying out a library quickly without polluting your project dependencies.
    
    - **Testing compatibility**: Install a different version of a library without changing your declared dependencies.

### Handling Remote Packages:

The `-f` or `--force` argument will force npm to fetch remote resources even if a local copy exists on disk.

### Package Installation Flow

<img title="" src=".\Diagrams\npm%20install%20flow.png" alt="" width="583"> 

### “As close to the top as possible”

- npm tries to install dependencies at the **highest level (`node_modules/`)** it can, instead of nesting them deep inside sub-dependencies.

- Why? Because if multiple packages need the same dependency, putting it at the top avoids **duplicate copies**.

---

### “Without breaking others”

- But npm can only “hoist” (lift up) a dependency if it **doesn’t conflict** with another package’s version requirement.

- If two packages need **different versions** of the same dependency, npm will **keep separate copies** by nesting.

## Versioning of packages

`npm` uses Semantic versioning, often shortened to [SemVer](https://www.google.com/search?sca_esv=9435af18d49acddf&sxsrf=AE3TifMPoM9pxicTgpx5QQxSMBEfrw-oCg%3A1755782021449&q=SemVer&sa=X&ved=2ahUKEwjV68Pd_ZuPAxVfS2wGHYZvNdwQxccNegQIKBAB&mstk=AUtExfDODUKOqH6nZ_HTsSTJiKxb0S83uhc6Nr-8SxMYRpSOaVnCCxY5FzxHVS9UUPAqMMhvMWadWuRh47YFqiIE6TElxPQIsl9YxnYyIJaXnC6_OaTaWmZekYUXfkZlqbS5f9eQmwTw4J2uYtI_auK5qjEsVHHVCojE1D23CsFiQC2sRs8&csui=3), is a versioning system that uses a three-part number (`MAJOR.MINOR.PATCH`) to indicate the type of changes introduced in a software release.

- **MAJOR:**
  
  Indicates breaking changes that **are not backward compatible** with previous versions. A major version bump signifies that existing code relying on the previous version might need to be updated to work with the new version. 

- **MINOR:**
  
  Indicates the addition of new features in a **backward-compatible** manner. New functionality is added without breaking existing functionality. 

- **PATCH:**
  
  Indicates **backward-compatible and  bug fixes**. This means the new version addresses/solves issues without introducing any changes to the existing functionality.

In `package.json`, 

- `^`: Allows for minor and patch updates, e.g., `^1.0.0` will accept versions up to `<2.0.0`.
- `~`: Allows only patch updates, e.g., `~1.0.0` will accept versions up to `<1.1.0`.
- Fixed version: Use an exact version if you don’t want any updates, e.g., `1.0.0`.

## npm run

This runs an command associated from a package's `"scripts"` object. If no `"command"` is provided, it will list the available scripts.

```bash
npm run <script> 
```

> #### There are alias for `run` !!!
> 
> you can use either `npm  run` , `rum`, `urn` to execute the scripts.
> 
> **npm has a built-in aliasing / typo-correction system** for a handful of very common commands.

### npm start

run the `start` script from the scripts object

shorthand for : `npm run start`

## npx (X -> execute)

`npx <package> <script>? ` : runs the the specified script of the package.

If the `<script/>` is not provided then it will execute the command of the `bin` property from the `package.json` of the specified package.

## npm init and npm create

`npm init <initializer>?`:  can be used to set up a new or existing npm package.

`<initializer>`: a package which starts with `create-*` and setups the required boilerplate for the project.  

1. `npm` internally prefixes `create-` to the `<intiliazer>` if it's not inserted in the command. 

2. Executes `npx create-<initializer>` 

If `<intiliazer>` is not provided then  `npm` will create a new `package.json` and setup a new raw project.

### Problem solved by npm create

`npm init` syntax got confusing, because it was overloaded:

- `npm init` (make `package.json`)

- `npm init <intilialzer?` (actually run `create-*`)

To solve this `npm` introduced `npm create` For better DX

1. Dev runs `npm create <intilaizer>` 
   
   1. > `Note` : `<intiliazer>` with out `create-` since `npm` will prefix it.``

2. `npm` will turn translate into to:  `npm init create-<initilazer/>`

3. Same process of `npm init`.

Trying out:

```bash
npm init -> created a package.json


npm init next-app -> created a new project.

npm create next-app -> also created a new project

Hence proved that 'create' is an alias for 'init' introduced for better 
DX for creatng a new project.
```

## npm vs others

| Tool                           | Type                                   | Purpose                                                | Key Features                                                                                                                                       | When to Use                                                     |
| ------------------------------ | -------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------- |
| **npm** (Node Package Manager) | Package Manager (default with Node.js) | Install/manage Node.js packages                        | - Comes bundled with Node.js- Installs dependencies into `node_modules` (flat structure)- Huge ecosystem                                           | ✅ Default choice if you don’t want extra setup                  |
| **pnpm** (Performant npm)      | Package Manager (alternative)          | Same as npm, but faster and more space-efficient       | - Uses **symlinks + global content-addressable store** → saves disk space- Much faster installs- Stricter dependency rules (avoids “phantom deps”) | ✅ If you want **speed + less disk usage**                       |
| **Yarn**                       | Package Manager (alternative)          | Same as npm, with focus on performance and determinism | - Introduced **lockfiles** first (deterministic installs)- Workspaces (monorepo support)- Two major versions (Classic v1, Berry v2+)               | ✅ If you work with **monorepos** or need Yarn-specific features |
| **curl**                       | CLI Tool (not a package manager)       | Download data/files from URLs                          | - Transfers data via HTTP, HTTPS, FTP, etc.- Can fetch files, APIs, scripts- Often used with `                                                     | bash` to run installers                                         |

### Why `pnpm` is faster than npm

| Factor                     | **npm**                                                                                     | **pnpm**                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Node Modules Structure** | Installs a **separate `node_modules`** folder for every project.                            | Uses a **global content-addressable store** and creates **symlinks (folder shortcuts)** in `node_modules`. |
| **Deduplication**          | Deduplication happens but still creates copies inside project.                              | Single copy of each package version is kept in store.                                                      |
| **Install Speed**          | Each `npm install` downloads and extracts packages into project.                            | After first download, later installs just **link files** instead of re-downloading.                        |
| **Disk Space Usage**       | Can consume **GBs** of space (duplicate copies across projects).                            | Uses ~70% less disk space since all projects share the same cached store.                                  |
| **Strictness**             | Allows deep `node_modules` structure, sometimes causing version conflicts ("phantom deps"). | Enforces a **flat & strict node_modules** with proper symlinks.                                            |
| **Lockfile**               | `package-lock.json` (ok but bigger).                                                        | `pnpm-lock.yaml` (smaller, faster to parse).                                                               |
| **First Install**          | Slower, because it downloads everything.                                                    | Slightly faster than npm.                                                                                  |
| **Subsequent Installs**    | Still slow if project is big.                                                               | **Blazingly fast** (just links from global store).                                                         |
