export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Trivia Night',
  pageTitle: '🎤 Trivia Night - Test Your Knowledge!',
  pageDescription: 'An interactive voice-powered trivia game powered by LiveKit AI',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/lk-logo.svg',
  accent: '#8b5cf6', // Purple
  logoDark: '/lk-logo-dark.svg',
  accentDark: '#c084fc', // Lighter purple
  startButtonText: 'Start Trivia',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
