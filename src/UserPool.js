import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
	UserPoolId: 'us-east-1_8WJXCCJiH',
	ClientId: '3mi6cjl4ojevgomh6h8eitbfft',
}

export default new CognitoUserPool(poolData)
