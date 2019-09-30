---
title: Feature Toggles Ideas and Uses!
subtitle: Easier to use! Easiest to Forget! Tools need to maintain! But better then Merge Conflicts!
date: 20-01-2019
auther: Sanjay
readtime: 4 min 
tags: Git,Toggles,Feature Toggles,CI CD Pipeline,Automation
keywords: Feature Toggles, Merge Hell, CI CD Pipeline, Automation
externallink: https://medium.com/@panda.sanjay18/feature-toggles-ideas-and-uses-baac271dc906
---
#### Easier to use! Easiest to Forget! Tools need to maintain! But better then Merge Conflicts!

> ### *Knife helped us to chopping the onion! Be careful it can cut you fingers.*

![Feature Toggle — Worth taking risk!](https://miro.medium.com/max/4667/1*oUy4K1iGMy5bkQcsLbMwgA.png)

This concept is not new, in traditional programming we use some flag to show hide the feature. The flag is stored in the DB and access by API.

Today we will talk about feature toggles in Frontend application.

Let see one scenario, we have two (suggest up to 5) team each having 5 members working on same code. Each team having their goal to deliver feature.

Here is some questions comes to mind when we work on a multiple team one codebase.

# How to manage code?

##### **Can we put all the new features team code in separate branch?**

No, we can’t keep branches long running. When you merge that to develop branch. That might cause merge hell. Believe me that is bad.

##### **Can we not take update from develop branch to feature branch every day?**

Yes, you can do that every day one of your team members need to take the responsibility.

##### **What if develop branch code is recently updated by other team a big feature with changes in 200 files.**

Now think about the merge conflicts and even if you solve the merge conflict by collaborate between team. You don’t know which part of code might break.

If every month if you find this two times also this is frustrating and time consuming.

# How to test features?
##### **Can we not do automated E2E testing which will help to find the issues?**

Very good, you can do that. But the we need to fix the test to allign with new features. E2E test passed but now it’s time for tester to test.

Now tester will need to understand the new scenario which he was not aware of. Think about the time west every place.

# How to release feature?
Can you not release the feature when that is ready?
Great you are close to send your hard work to production time for party.🥂

Oh no! The backend is not ready yet that will take few weeks, a third party integration taking time.

Or

Oh no! This feature will go after some other feature. Wait for 3 month.

Ok we are in separate branch no worries we will wait.

We are in agile, we can’t wait for things to go. It’s time to move ahead for new features. Let’s repeat all the above.

Think about who is maintaining that later release branch.

After 2 weeks or three months…

Aha..we have the branch ready let’s tell a developer to merge the feature branch to develop.

Developer says allow me 2hr I will be ready with build.
Business is waiting for the good news.

Oh no! Not again. Develop branch having new changes we need to merge that resolve conflict then we have to test both feature every aspect. We can go release tomorrow. 🙄

Repeat this for every release.

Now you know/remember the pain. let’s dive into the the solution.

# Feature Toggles!
## Very sharp like knife but very helpful.
Let’s recap the scenario, we have two (suggest up to 5) micro team each having 5 members working on same code. Each team having their goal to deliver feature.

##### **How feature Toggles help us?**

Think that each feature will protected by a flag (e.g If condition) and those flags stored in a json files in your project. (You can store this any format depends on the project)

Example: Team A develop a feature which is given name feature1 and Team B create one which is Feature2.

When you build(e.g Make a bundle) your application as a Team A, your expectations is that need to show you only feature1 and hide feature2. Vice versa for Team B.

How cool!!

Now we are at stage where we don’t need to create long running feature branches and we are always up-to-date with develop branch.

Let’s answer some of the questions.

##### **How team have confidence on their code when it’s have multiple untested feature?**

Here is the part you have to be careful with E2E testing. Which will help you when you commit your changes this will perform switch off and switch on testing.

##### **How switch off and switch on testing will work?**

So it will run testing on for both the build for Team A and Team B.

Take Team A build, which is feature 1 toggle switch on and feature 2 will be switched off. And the test will only run feature 1 test. And the opposite of Team B.

##### **How we will go production?**

When ever we ready with any feature we just remove the toggle from the config and go live from develop.

If any delay in delivery keep the toggle.

#### **Life is little different here, we have to adopt some process first.**

1. No long running big feature branch.
2. Keep team toggle config in different files.
3. Adopt fail first approach
4. Everything need to automated.
5. Unit testing followed by functional testing with toggle on/off test and regression testing with toggle on/off test.
6. Keep track of your toggles once released feature, remove toggle from code.
7. Make the removal also automated. Use tool like (https://github.com/facebook/jscodeshift)

If your safety precaution is well set then you are all good to use toggle and release your features with confident. All the best!

Please let me know your solution for the above problem. Might that helpful for others!

##### If you Like, Please give me a clap on [@medium](https://medium.com/@panda.sanjay18/feature-toggles-ideas-and-uses-baac271dc906)