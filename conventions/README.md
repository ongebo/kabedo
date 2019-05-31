# Project Conventions
As a contributor to this project, adhere to the guidelines defined herein.

## Workflow
Always use the feature-branch workflow. To add any work to the codebase:
* Create a branch from the default branch (**develop**).
* Make the necessary changes and make one commit.
* Ensure your commit is on top of the latest commit on **develop**. Rebase against **develop** if this is not the case.
* Raise a Pull Request following the convention defined herein.

**NB:** Any branch not created from **develop**, a commit/PR not following this convention will not be merged.

## Branch Naming
Branches should have short and descriptive messages followed by the ID of the related Pivotal Tracker story. The names should preferrably be imperative verbs like: enable-users-to-login-\<story-id\>, fix-signup-error-\<story-id\>; or descriptive nouns like: authentication-\<story-id\>, homepage-design-\<story-id\>. Words should be separated with hypens (-).

## Commit Messages
Each commit message must have a header, an optional body, and a footer. All these must be separated with empty lines.
### Header
This is a short description of the change being made. It should:
* be in present tense (e.g. Update README.md not Updated README.md).
* not exceed 50 characters.
* begin with a capital letter and not end with a period (.).
### Body
This is a more detailed description of the change being made. It may be omitted for atomic commits wherein the description is contained in the header. It could be a listing of the atomic commits being squashed into one commit message.
### Footer
It indicates the action the commit makes the to the relevant Pivotal Tracker story e.g. [Finishes #\<story-id\>]. In case the commit fixes or resolves an issue, this is where is should be indicated. 

## Pull Requests
Each PR must have a title, a description, and a label.
### PR Title
A short and descriptive message, it should follow the same rules of a commit message header. Do not indicate the Pivotal Tracker story ID in the PR title.
### PR Description
It should have four headings:
* **Task Accomplished:** This is a statement similar to the title of what the PR does. Indicate bug fixes, chores, or feature additions in this statement.
* **Changes to Make:** A listing in present tense of the changes that are to be made to the codebase. Think of these as atomic commit messages.
* **Images/Screenshots:** Where applicable, include these to show what the case was **before** and **after** the change to be made.
* **Relevant PT Stories:** Hyperlinks to the associated Pivotal Tracker stories. The Hyperlink texts should be the IDs of the relevant PT stories.
### PR Labels
Use the **Work in Progress** label for a PR that is not yet completed. Use **Finished** when the PR is ready for review/merge.
