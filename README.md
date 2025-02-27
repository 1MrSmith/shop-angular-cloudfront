# TASK2: Serve SPA in AWS

## Manually created resources

### S3 bucket:

http://dream-shop-angular-cloudfront.s3-website-eu-west-1.amazonaws.com/

### CloudFront:

https://d3mk6tnn95ii2r.cloudfront.net/

## Resources created by the `serverless` framework

### S3 bucket:

http://shop-angular-cloudfront-sls.s3-website-eu-west-1.amazonaws.com/

### CloudFront:

https://d2nu6079bnm48e.cloudfront.net

# TASK3: First API with AWS API Gateway and AWS Lambda

## endpoints:

```
    - GET - https://9qhyrydex7.execute-api.eu-west-1.amazonaws.com/dev/api/products
    - GET - https://9qhyrydex7.execute-api.eu-west-1.amazonaws.com/dev/api/products/{id}
```

# Shop Angular Cloudfront

Angular version: ~12.

Repo maintainers:

- [Sergey Gultyayev](https://github.com/gultyaev)

## The purpose

The repository was created to have an Angular version of e-shop for EPAM NodeJS AWS course. At the same time we strive to make this repository follows best practices so it may be used as a starter for new projects with all the necessary toolings already set up.

## NodeJS AWS course integration

All the necessary API endpoints are in the environments files `environment.ts` (for dev builds). Also it contains feature flags to enable/disable endpoints invocations from within the app so to ensure that you don't get errors for not implemented API endpoints.

## Contribution

Create an issue with the detailed description of the improvement/issue.

If you would like to help implementing some feature, you should ask the maintainers for approval so to ensure that the feature is desired in the repository and no efforts go wasted.

## Get up and running

Prerequisites: NodeJS v14

Follow the steps:

- git clone
- npm i
- ng serve
