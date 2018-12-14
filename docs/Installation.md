# Installation & Setup

The setup process is pretty straight forward. Essentially we create a file `.generator.config` the first time the Generator is run. On subsequent runs, we bubble up from the current directory checking for a configuration file. If we don't find one, we'll prompt you to create one. Using this approach we can have multiple configurations co-exist. This also makes it incredibly easy to run the generator from anywhere we'd like to.

```sh
# This can also be installed on a per-project basis
npm i @visormatt/generator -g

# re-open the shell (same node version)
generate
```
