import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { Backend102Julia } from '../lib/backend-102-julia';

const app = new App();
new Backend102Julia(app, 'Backend102Julia-CODE', {
	stack: 'deploy',
	stage: 'CODE',
});
