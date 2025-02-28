//Git repository
//local    git init   ->    .git
//clone    ??


// 3 area
//1  .git_study   git add . ↓
//2  .git/index   git commit -m 'remarks' ↓
//3  .git/objects (generate a hash string) 

//view file status   git status -s
// U A '' M

//git restore targetFile
//git rm --cached targetFile

//git list --files       view files in current space

//git log --oneline      view commit history
//git reflog --online     view complete commit history
//git reset --soft virsionNumber
//git reset --hard virsionNumber
//git reset --mixed virsionNumber  (=git reset)

// new a .gitignore file
/*
node_modules
dist
.vscode
*.pem
*.cer
*.log
password.txt
*/

//branch    HEAD  master

//git branch branchName
//git checkout brachName
//git branch        view all branches
//git checkout master
//git branch login-bug
//git checkout login-bug

//merge branches
//login-bug -> master
//git checkout master    
//git merge login-bug          merge
//git branch -d login-bug      delete branch name

//merge and commit

//merge conflicts
//(fix conflict)
//git add .
//git commit -m 'remarks'

// Command Summary
/*
git -v                      view git virsion
git init                    initialize git depository
git add filePath            temporarily save a file
git add .                   temporarily all files
git commit -m 'remarks'     commit files，snapshot staging area contents
git status                  view file status,detailed information
git status -s               view file status,brief information
git ls -files               view staging area file list
git restore filePath/.      restore from the staging area to the working area,current/all
git rm --cached filePath    remove files from the staging area
git log                     view commited info,detailed
git log --online            view commited info,brief
git reflog --online         view full history,contain commit/checkout/restore
git reset virsonNumber      --soft/hard/mixed(default)  keep all/nothing/not staging but working area
git branch branchName       create a branch
git branch                  view local branches
git branch -d branchName    delete a branch
git checkout branchName     switch branches
git checkout -b branchName  create and switch a branch
git merge branchName        merge branches
*/

//git remote repository  (Gitee,GitLab,GitHub...)
/*
git remote add repositoryName path
git remote remove repositoryName
git remote -v
git push -u Watermelon main
*/

