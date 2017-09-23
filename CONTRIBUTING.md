# Contributing


## Starting the program

From the terminal:

0. mongod

From within the client root directory:

0. npm install
1. react-native link

From within the server root directory:

0. npm install
1. pip install pandas
2. pip install scikit-learn
3. npm run start:watch

In order to use the app, you also need to setup a facebook developers profile with the correct as well as a yelp fusion API account.

Facebook: https://developers.facebook.com/

0. Add a new app.
1. Create app id.
2. Navigate to the dashboard of the new app.
3. Under 'select a product', select 'facebook login'.
4. Choose 'ios'.
5. Follow the guide.
  a. Skip step 1, 2, 7, 8 & 9.
6. Navigate back to dashboard.
7. Under 'facebook login', select 'settings' and under valid oAuth redirect URI's enter callbackURL as 'localhost:3000/auth/facebook/'
8. Afterwards, select the main setting on left hand side.
9. Copy and save app id and app secret.
10. Create a auth/config.js file in the server root dir as such:
``` javascript
const facebook = {
  clientID: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture.type(large)']
};

module.exports = facebook;
```

Yelp fusion API: https://www.yelp.com/developers

0. Create an app.
1. Grab api key and save in auth/yelpConfig.js in the server root dir as such:
``` javascript
const yelp = {
  appId: 'APP_ID',
  appSecret: 'APP_SECRET'
}

module.exports = yelp;
```


After all the above is done, in the client root dir, run 'react-native run-ios'.

## Github Worflow

--- SET UP ---

0.1 fork the repo
0.2 git clone
0.3 git remote add origin master (to your own branch)
0.4 git remote add upstream (to the toucan)

--- SUBMITTING CHANGES TO THE REPO ---

1. git add .
2. git commit
3. git pull --rebase upstream master

-- if there are merge conflicts --

3.1 open up the files with the merge conflicts in your text editor
3.2 delete the code you want to be replaced along with the ">" and "HEAD" and any extra text
3.3 type: git --rebase continue
3.4 continue to step 4 if there are no more conflicts

-- merge conflicts end --

4. git push(to your own repo on github if you want to)
4.5 OPTIONAL (git -push -f origin master (if there is a conflict))
5. do git pull request  as toy problems


## Github Tips

-- check logs --

git log
git log --graph

-- check command history --

git reflog

-- reset to a previous commit --

- reset --hard xxx
(the xxx will be the commit ID you get from reflog)

## Detailed Workflow

#### Commit Message Guidelines

- Commit messages should be written in the present tense; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. Step 1 is to rebase upstream
changes to the master branch into yours by running this command
from your branch:

```bash
git pull --rebase upstream master
```

This will start the rebase process. You must commit all of your changes
before doing this. If there are no conflicts, this should just roll all
of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

If there are conflicting changes, git will start yelling at you part way
through the rebasing process. Git will pause rebasing to allow you to sort
out the conflicts. You do this the same way you solve merge conflicts,
by checking all of the files git says have been changed in both histories
and picking the versions you want. Be aware that these changes will show
up in your pull request, so try and incorporate upstream changes as much
as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (there are new tests, right?) and
make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

### Make a pull request

Make a clear pull request from your fork and branch to the upstream master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. Run the [tests][] before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.


<!-- Links -->
[style guide]: https://github.com/reactorcore/style-guide
[n-queens]: https://github.com/reactorcore/n-queens
[Underbar]: https://github.com/reactorcore/underbar
[curriculum workflow diagram]: http://i.imgur.com/p0e4tQK.png
[cons of merge]: https://f.cloud.github.com/assets/1577682/1458274/1391ac28-435e-11e3-88b6-69c85029c978.png
[Bookstrap]: https://github.com/reactorcore/bookstrap
[Taser]: https://github.com/reactorcore/bookstrap
[tools workflow diagram]: http://i.imgur.com/kzlrDj7.png
[Git Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[GitHub Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Squash]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html


