# Code Reviews

This page describes the process of reviews the code from any pull requests. Use this Guidelines to keep project's code consistent.

!> Follow these steps only on development and master branch (hotfix PRs).

## Performing Code Reviews

- Clone to your machine
- Run the tests locally
- Check the app/website is working fine with the new changes or not
- Check out that changes have followed all coding guidelines
- Merge the request

### What if changes are required?

- Comment in GitHub about the required changes.
- Give descriptive example like :

```js
var commentCount = 0;
```

_You might suggest that this should be `const` instead of `var` on this line in pull request._

- Inform the code owner about these required changes
- If you does not hear from user within **7 days, take needed actions**
