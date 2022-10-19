#!/usr/bin/env node

import { writeConfig } from './setup/config';

// Skip to it and kick off the step to write our configuration
writeConfig(false);
