# 🛠 Development

Getting started is pretty easy, just clone, install and get generating. It comes with several default templates that you can use, modify or remove. Take a look at the [Docs Folder](./docs) for more documentation or use the quick start below.

**Quick Start:**

I need to wrap this up into an NPM package 📦 making it easier to use, but in the mean time we can clone and install it locally. The only 👉 caveat 👈 here is when running the commands below, your **Node versions must match** the projects Node version you want to use this generator.

```bash
# Have to clone (need to make it an NPM package)
git clone git@github.com:visormatt/generator.git

# Jump into the build
cd generator/

# Install the packages required to build
npm run build

# Adds the `generate` CLI command (from package.json ~ scripts/bin)
npm link
```

👍 Now the tool is installed. The first time you run `generate` from the CLI you be prompted to customize a few fields, these are made available to the templates as variables. All this does is create a `.generator.config` file at the `root` of your project. As you navigate to the children running `generate` will bubble up searching for this file, if one is not found we assume you are starting a new project. Use it many places, create your own templates and if you have a free minute help me add some features 😉

```sh
# Compile and watch for any changes
npm run build:dev

# Symlink a package folder ~ https://goo.gl/GfVbii
npm link
```
