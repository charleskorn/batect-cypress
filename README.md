# batect-cypress

This was originally meant to be a repro of a bug in either batect or docker.

But unfortunately, it works.

So now it's a little example repo instead. It shows how to set up cypress with batect,
and get it talking to a node app running in a different container.

Download dependencies with `./batect setup`, then either start the app with `./batect app`
or run the Cypress tests with `./batect e2e`.