const MSG_SETUP_DEFAULT = 'Running generator setup.\n';
const MSG_SETUP_REQUIRED = '⚠️️ No configuration file found, running setup.\n';

const MSG_SETUP_SUCCESS = (path: string) =>
  `\n✅ Configuration file created: ${path}\n`;

export { MSG_SETUP_DEFAULT, MSG_SETUP_REQUIRED, MSG_SETUP_SUCCESS };
