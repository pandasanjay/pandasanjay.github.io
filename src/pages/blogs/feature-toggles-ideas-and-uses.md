---
title: Feature Toggles Ideas and Uses
subtitle: Easier to use, easiest to forget! Tools needed for maintenance, but better than merge conflicts!
date: 2019-01-20
auther: Sanjay
readtime: 5 min # Adjusted read time slightly
tags:
  - Git
  - Toggles
  - Feature Toggles
  - CI CD Pipeline
  - Automation
keywords: Feature Toggles, Merge Hell, CI CD Pipeline, Automation, Frontend Development, Continuous Integration
externallink: https://medium.com/@panda.sanjay18/feature-toggles-ideas-and-uses-baac271dc906
---

#### Easier to use, easiest to forget! Tools needed for maintenance, but better than merge conflicts!

> ### *A knife helps chop onions, but be careful – it can cut your fingers.*

![Feature Toggle — Worth taking risk!](https://miro.medium.com/max/4667/1*oUy4K1iGMy5bkQcsLbMwgA.png)

Feature toggles aren't a new concept. In traditional programming, we often use flags (maybe stored in a database and accessed via API) to show or hide features. Today, let's focus on how feature toggles work in modern frontend applications.

Imagine this scenario: two teams (let's say up to five teams is manageable), each with five members, working on the *same codebase*. Each team has its own features to deliver. This setup naturally raises some questions about managing the code effectively.

## The Challenge: Managing Code Across Teams

When multiple teams collaborate on one codebase, the first instinct is often to isolate work using feature branches. But this approach frequently leads to complications:

*   **The Long-Running Branch Problem:** Keeping features in separate branches for weeks or months seems safe at first. However, the longer a branch lives apart from the main development line (`develop` or `main`), the higher the risk of complex and painful merges later. Welcome to "merge hell."

*   **The Daily Merge Dilemma:** "Can't we just merge `develop` into our feature branches daily?" Sure, you *can*, but this adds daily overhead and doesn't solve the fundamental problem. If another team merges a large feature (touching, say, 200 files), your "simple" daily merge can suddenly become a complex, conflict-ridden task.

*   **The Hidden Risks:** Even if you meticulously resolve merge conflicts (often needing significant cross-team discussion), hidden dangers remain. Subtle interactions between the merged codebases can introduce unexpected bugs or break existing functionality in ways that aren't immediately obvious during the merge.

This cycle of complex merges and integration risks is frustrating and can drastically slow down your team's development velocity.

## The Testing Hurdle with Branches

"Okay, but can't automated End-to-End (E2E) tests catch these integration issues?"

That's a good point! E2E tests *can* help. However, when you merge large, long-lived branches, you often need to spend significant time fixing tests to align with all the new changes. Even if the E2E tests eventually pass, manual testers still face challenges. They need to understand and test new scenarios and interactions they weren't previously aware of, consuming valuable time and effort.

## The Release Bottleneck with Branches

"Why not just release the feature branch when the feature is ready?"

Sounds simple, right? You're finally ready to ship your hard work to production – time to celebrate! 🥂

But then reality hits:

*   "Oh no! The backend API isn't ready yet. That will take a few more weeks."
*   "Oops! The third-party integration we depend on is delayed."
*   "Hold on! Business decided this feature needs to go out *after* another feature, which isn't ready. We need to wait three months."

"No worries," you might think, "we're safe in our separate branch. We'll just wait."

But we're supposed to be agile! Waiting isn't ideal. The team needs to move on to new features, repeating the whole branching and merging cycle. Meanwhile, who is maintaining that delayed feature branch, keeping it updated with `develop`?

Fast forward two weeks or three months...

"Aha! The backend is finally ready! Let's merge the feature branch!"

A developer estimates, "Give me a couple of hours to handle the merge."

Business waits eagerly for the good news.

... "Oh no! Not again!" 🙄 The `develop` branch has accumulated many new changes. Merging the old feature branch now involves resolving numerous conflicts. Afterwards, *both* the original feature *and* the newly integrated changes need thorough testing across all aspects. The release is delayed again, maybe until tomorrow, maybe longer.

Repeat this painful process for every delayed feature release.

If you recognize this pain, let's dive into a potential solution.

## Feature Toggles: The Sharp but Helpful Alternative

> ### *Very sharp like a knife, but very helpful.*

Let's revisit our scenario: multiple teams working on the same codebase, each delivering features. How can feature toggles help?

Think of each new feature being protected by a flag (a simple `if` condition). These flags are typically stored in configuration files (like JSON) within your project.

**Example:** Team A is building `feature1`, and Team B is building `feature2`. Both teams commit their code (wrapped in feature toggles) directly to the main `develop` branch.

*   When Team A builds the application for testing, their build configuration enables the `feature1` toggle and disables `feature2`. They only see and test their feature.
*   Conversely, Team B's test build enables `feature2` and disables `feature1`.

How cool is that?

With this approach, you avoid long-running feature branches and stay continuously integrated with the main `develop` branch.

### Building Confidence with Toggled Features

"How can teams be confident their code works when the main branch contains multiple other teams' untested features?"

This is where disciplined testing, especially E2E testing, becomes crucial. Your automated test suite needs to be toggle-aware. When you commit changes, the CI/CD pipeline should run tests against different toggle combinations.

### How "Toggle-Aware" Testing Works

The test suite runs multiple times with different configurations:

1.  **Build for Team A:** `feature1` toggle ON, `feature2` toggle OFF. Run only the tests relevant to `feature1`.
2.  **Build for Team B:** `feature1` toggle OFF, `feature2` toggle ON. Run only the tests relevant to `feature2`.
3.  **(Optional but Recommended) Full Build:** All toggles ON (or relevant combinations). Run regression tests covering interactions.

This ensures features work in isolation and don't break existing functionality when disabled.

### Releasing Features to Production

When a feature (say, `feature1`) is fully tested and ready for release:

1.  Remove the `feature1` toggle flag from the configuration.
2.  Remove the corresponding `if (feature1Enabled)` checks from the codebase.
3.  Deploy the `develop` branch to production.

If a feature faces delays (like waiting for the backend), just keep its toggle in place (and turned off in the production configuration). The code is merged, but the feature remains hidden from users.

## Adopting the Feature Toggle Workflow

Life with feature toggles requires adopting some new processes:

1.  **No More Long-Running Feature Branches:** Commit small, incremental changes directly to the main branch, wrapped in toggles.
2.  **Manage Toggle Configurations:** Keep toggle settings organized, perhaps in separate files per environment or team for clarity during development.
3.  **Test Thoroughly:** Implement robust unit, integration, and E2E tests that are toggle-aware. Test features both when toggled ON and OFF.
4.  **Automate Everything:** Automate builds, testing with different toggle configurations, and deployments.
5.  **Clean Up Toggles:** This is critical! Once a feature is fully released and stable, *remove the toggle* and the associated conditional logic from the codebase. Dead toggles add complexity.
6.  **Automate Toggle Removal:** Use tools like codemods (e.g., [jscodeshift](https://github.com/facebook/jscodeshift)) to help automate the removal of toggle code once a feature is launched.

With the right safety precautions and automation, feature toggles allow you to release features more confidently and frequently. All the best!

---

What are your solutions to the multi-team, single-codebase challenge? Please share in the comments – it might help others!
