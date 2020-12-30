# batect-sample-cypress

This repo shows how to set up Cypress with Batect, and get it talking to a Node.js app running in a different container.

Download dependencies with `./batect setup`, then either start the app with `./batect app`
or run the Cypress tests with `./batect e2e`.

## Chrome's shared memory usage

Chrome uses IPC to communicate between its various processes. If your page is particularly complex, this can require a lot of
shared memory (often referred to as `shm`), and if there isn't enough shared memory available, Chrome will simply crash.

By default, Docker will set a limit on shared memory of 64 MB, which usually isn't enough. This project increases the limit
to 1 GB with [`shm_size`](https://batect.dev/docs/reference/config/containers#shm_size) in [`batect.yml`](batect.yml). Your
project may require a higher limit.

There's more information available in [this issue](https://github.com/cypress-io/cypress/issues/350) in the Cypress repo.
