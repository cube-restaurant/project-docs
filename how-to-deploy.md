---
title: 'How to Deploy'
---
<br><br>

# How To Deploy

This page provides instructions for deploying the final release to `master` branch. Follow these all steps to avoid conflicts with existing code.

## Step 1 : fetch from `development` branch
Fetch all changes from `development` branch locally on your machine test all new features committed to the development branch. 

## Step 2 : Test all new features  
Test every new features with all possible scenarios. As this project is web based, test all features in every common browsers and every possible device screen sizes in both orientation.

## Step 3 : Hot Fixes
If you find any problem with the code during testing all new features, add them to the **Hot Fixes list** in Coda and also inform the team about new Hot Fixes of the project.

## Step 4 : Make pull request
If the code is working fine, make a pull request from development to master branch. And also make description of your testing. Only **Contributors** are allowed to make pull requests from development branch to master. after the pull request, Admin will again look over changes and merge it with `master` branch

## Step 5 : Wait for now integration
Once the branch is merged to the development branch, Now will automatically builds the project and deploys it to the server. Wait until now's build finishes. If it goes wrong, troubleshoot the problem and fix it ASAP. If deploy is successfull, proceed to next steps.

## Step 6 : Test Production Website
After updating the production server with new changes, again test it on various devices to make sure that website works fine in all devices and in all orientations.