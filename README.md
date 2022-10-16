<p align="center">
	<img src="https://raw.githubusercontent.com/vinyashegde/code-fraggers/master/src/assets/logohorizontal.png" width=500px height=200px>
	<h1 align="center"> Code Fraggers </h1>
		<p align="center">
			<b>This is the main repository of the Code Fraggers website. </b> 
		</p>  
</p>

## About 

Code Fraggers is a platform for solving Data Structures and Algorithms questions while being incetivized for your work. The main aim of the platform is to make learning and practicing DSA questions both fun and rewardinng.

## Contributing Prerequisites

### System requirement

1. Any system with basic configuration.
2. Operating System : Windows / Linux / Mac


### Software requirement

1. Node.js
3. Git

### Skill requirement

1. Git & Github
2. React.js
3. HTML
4. CSS

## Useful Links
[Figma files](https://www.figma.com/file/jbHM5hTNpHikFhxmuFPZqM/CodeFraggersFinal?node-id=0%3A1) <br>
[Live Website](https://hetvisoni.github.io/code-fraggers/)

## Running the Project Locally

### Setting Up The Application

1. Clone the project with `git clone`
2. `cd` into it with `cd /code-fraggers`
3. Run `npm install`
4. You are good to go! Now you can start the project by typing `npm start`

 #Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process. 
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. Thank you for helping out and remember,
**no contribution is too small.**

# Submitting Contributions👩‍💻👨‍💻
Below you will find the process and workflow used to review and merge your changes.

## Steps
- Take a look at the Existing Issues or create your **own** Issues!
- **Do have a look at design files : https://www.figma.com/file/jbHM5hTNpHikFhxmuFPZqM/CodeFraggersFinal?node-id=0%3A1 as we need to make the website as per the design only.**
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note : Every change in this project should/must have an associated issue. 
- Do not create any pull request without being assigned to any issue.
- While creating pull request do remember to add screenshots of your work. Also link your pull request to the issue by `Closes #issue-number` .

# Basics of Git and GitHub

### Git & GitHub

Before we proceed, it's better to know the difference between Git and Github. Git is a version control system (VCS) that allows us to keep track of the history of our source code , whereas GitHub is a service that hosts Git projects. 

We assume you have created an account on Github and installed Git on your System.

Now enter your name and E-mail (used on Github) address in Git, by using following command.

`$ git config --global user.name "YOUR NAME"`
` $ git config --global user.email "YOUR EMAIL ADDRESS"`
This is an important step to mark your commits to your name and email.

<br />

### Fork a project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>
Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

<br />

<br />

### Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

`$ git clone https://github.com/HetviSoni/code-fraggers.git` <br/>
Now you have the project on your local machine.

<br />

### Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

`$ cd <your-forked-project-folder>`
`$ git remote add upstream https://github.com/HetviSoni/code-fraggers.git` <br/>
You will see the benefits of adding remote later.

<br />

### Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

`$ git checkout master`
`$ git fetch upstream`
`$ git merge upstream/master`
`$ git push origin master` <br/>
The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

<br />

### Create a new branch for a feature or bugfix

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

`$ git checkout -b <feature-branch>`
This will create a new branch out of master branch. Now start working on the problem and commit your changes.

`$ git add --all`
`$ git commit -m "<commit message>"`
The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes.

<br />

### Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

`$ git push origin master`
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bug fix to original repository. You can open a pull request now.

## Contributors :

<a  href  =  "https://github.com/HetviSoni/code-fraggers/graphs/contributors">

<img  src  =  "https://contrib.rocks/image?repo=HetviSoni/code-fraggers"/>

</a>
