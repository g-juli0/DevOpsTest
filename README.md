Sample site for DevOps CI/CD project with Kubernetes, Docker Desktop, and GitHub Actions

# To run locally (notes to self):

1) make sure actions-runner is running with
```run.cmd```

2) make sure any old containers are removed on Docker Desktop (no automated tear-down in the pipeline)

3) edit a file, commit, and push

4) watch workflow status!
test --> build --> deploy

5) find new container, open logs, and follow link to localhost:8080

6) see your frontend changes, locally!
