#### README.md

After Cloning the Repository, follow these steps to detach the original remote and link the upstream repository.

1. Remove the original `origin` remote

```sh
git remote rm origin
```

2. Add the upstream repository

```sh
git remote add upstream https://github.com/vulovix/platinum-quartz.git
```

3. Fetch the upstream branches

```sh
git fetch upstream
```

4. Pull the latest changes from the upstream `main` branch

```sh
git pull upstream main
```

Your local repository is now connected to the upstream source and up to date.
