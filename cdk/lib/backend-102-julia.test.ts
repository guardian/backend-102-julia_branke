import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Backend102Julia } from './backend-102-julia';

describe('The Backend102Julia stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new Backend102Julia(app, 'Backend102Julia', {
			stack: 'deploy',
			stage: 'TEST',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
