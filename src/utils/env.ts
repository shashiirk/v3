export function getActiveEnv(): PossibleEnv {
	// APP_ENV is inserted from the deployment infra
	return (process.env['APP_ENV'] || 'development') as PossibleEnv;
}
