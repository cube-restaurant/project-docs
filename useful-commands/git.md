---
title: 'Git CLI'
---
<br><br>

# Usefull Commands - Git CLI

This page provides basic and useful commands for the Git CLI. This project's major commits have done with Git CLI, feel free to use any desktop app to make commits. You need to install Git CLI first!
Checkout installation guide [here](https://git-scm.com/).
 
### Setup User
Run following commands inside terminal / cmd to register user globally on the machine.
```shell
# Username
git config --global user.name "John Doe"

# password
git config --global user.email johndoe.com
```

### Init Git Repository
Go to the root of the project and run following code in terminal / cmd to initialize git repository.
```shell
git init
```

### Clone Repository
```shell
git clone path/link-to-repo
```

### Add Changes to staging
```shell
# Add specific file
git add <filename.ext>

# Add all files with changes
git add .
```

### Commit Changes
```shell
git commit -m "Your commit message goes here"
```

### List changed or committed files
```shell
git status
```

### Push to remote repository
```shell
git push origin master
```

### Change branch
```shell
# Changes the current branch
git checkout <branchname>

# Creates new branch and changes current branch
git checkout -b <branchname>
```



### References
List of references regarding useful commands of Git CLI.
* Official Documentation - [Git CLI Docs](https://www.git-scm.com/doc)
* Basic Commands List - [List from BitBucket](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
* GUI App for GitHub - [GitHub Desktop](https://desktop.github.com/)